import React, { useDebugValue } from 'react';
import './Avatar.css';
import ClassmateInfo from './ClassmateInfo'


import config from './Firebase/config'
import { withAuthorization } from './Session';
import ClassInfo from './ClassInfo';

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

            avatarList = avatarList.filter(key => key.uid != this.props.firebase.auth.currentUser.uid);



            console.log(avatarList);

            this.setState({
                avatars: avatarList
            });

        });
    }

    handlePopup = () => {
        this.setState({ popupUID: null });
    }


    render() {
        return (
            <div>
                {this.state.avatars.map(u => console.log('i am ', u.firstName, u.lastName, u.left_coord, u.top_coord))}

                <ul>
                    {this.state.avatars.map(avatar => (
                        <div key={avatar.uid}>
                            <button className='button' id='other_avatar' style={{ left: avatar.left_coord, top: parseInt(avatar.top_coord) + 140 + 'px' }}>
                                <strong>name:</strong> {avatar.firstName}
                                {/* <ClassmateInfo></ClassmateInfo> */}
                            </button>

                        </div>
                    ))}
                </ul>
            </div>


        );
    }

}


const condition = authUser => {
    if (authUser) return authUser.uid; return !!authUser;
};

export default withAuthorization(condition)(OtherAvatar);