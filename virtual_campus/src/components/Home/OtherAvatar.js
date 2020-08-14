import React, { useDebugValue } from 'react';
import './Avatar.css';
import ClassmateInfo from '../Classroom/ClassmateInfo'


import config from '../Firebase/config'
import { withAuthorization } from '../Session';

//firebase requirements
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

class OtherAvatar extends React.Component {
    constructor(props) {
        super(props)

        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(config);
        }

        this.database = firebase.database().ref();

        this.state = {
            popupUID: null,
            showPopup: false,
            avatars: []
        }

        this.handlePopup = this.handlePopup.bind(this);

    }

    componentDidMount() {
        firebase.database().ref('/users').on('value', snapshot => {
            const avatarsObject = snapshot.val();

            console.log(avatarsObject);

            var avatarList = Object.keys(avatarsObject).map(key => ({
                ...avatarsObject[key],
                uid: key,
            }));
            var myAvatar = this.props.firebase.auth.currentUser;
            if (myAvatar != null) {
                avatarList = avatarList.filter(key => key.uid != myAvatar.uid);
            }
            



            console.log(avatarList);

            this.setState({
                avatars: avatarList
            });

        });
    }

    handlePopup(avatar) {
        this.setState({ 
            popupUID: avatar.uid,
            showPopup: !this.state.showPopup
         });
    }

    render() {
        return (
            <div>
                {this.state.avatars.map(u => console.log('i am ', u.firstName, u.lastName, u.left_coord, u.top_coord))}

                <ul>
                    {this.state.avatars.map(avatar => (
                        <div key={avatar.uid}>
                            <button className='button' id='other_avatar' onClick={this.handlePopup.bind(this, avatar)} style={{ left: avatar.left_coord, top: parseInt(avatar.top_coord) + 175 + 'px' }}>
                            </button>

                            

                        </div>
                    ))}
                </ul>
                {this.state.showPopup ?
                            // console.log(this.state.avatars.filter(key => key.uid === this.state.popupUID)[0])
                                    <ClassmateInfo avatar={this.state.avatars.filter(key => key.uid === this.state.popupUID)[0]} closePopup={this.handlePopup} />
                                    : null
                                }
            </div>


        );
    }

}

const condition = authUser => {
    if (authUser) return authUser.uid; return !!authUser;
};

export default withAuthorization(condition)(OtherAvatar);