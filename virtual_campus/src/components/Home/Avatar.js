import React from 'react';
//import ArrowKeysReact from 'arrow-keys-react';
import './Avatar.css'
import { withAuthorization } from '../Session';

import config from '../Firebase/config';

//firebase requirements
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var avatar = null
class Avatar extends React.Component {
    constructor(props) {
        super(props)

        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(config);
        }

        this.database = firebase.database().ref();
        console.log(this.props.firebase.auth.currentUser.uid);

        this.state = {
            showPopup: false,
            avatarLeft: 0
        }

        this.makeAvatar = this.makeAvatar.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.handleOnKeyPressed = this.handleOnKeyPressed.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
    }

    writeUserData(leftCoord, topCoord) {
        firebase.database().ref('users/' + this.props.firebase.auth.currentUser.uid).update({
            left_coord: leftCoord,
            top_coord: topCoord
        });
    }


    componentDidMount() {
        this.makeAvatar();
        console.log("started");
    }

    makeAvatar = () => {
        avatar = document.getElementById("avatar");
        avatar.style.position = 'relative';
        avatar.style.left = '0px';
        avatar.style.top = '0px';

    }

    handleOnKeyPressed = (e) => {

        var key_code = e.which || e.keyCode;
        console.log(key_code)
        console.log(avatar.style.left, avatar.style.top)

        switch (key_code) {
            case 65:
                this.moveLeft();

                break;
            case 87:
                this.moveUp();

                break;
            case 68:
                this.moveRight();

                break;
            case 83:
                this.moveDown();

                break;
        }
        this.writeUserData(avatar.style.left, avatar.style.top);
    }

    moveLeft = () => {
        this.setState({
            avatarLeft: 15
        })

        avatar.style.left = parseInt(avatar.style.left) - 15 + 'px';
    }

    moveRight = () => {
        this.setState({
            avatarLeft: parseInt(avatar.style.left) - 15
        })
        console.log(this.avatarLeft);

        avatar.style.left = parseInt(avatar.style.left) + 15 + 'px';
    }

    moveUp = () => {
        avatar.style.top = parseInt(avatar.style.top) - 15 + 'px';
    }

    moveDown = () => {
        avatar.style.top = parseInt(avatar.style.top) + 15 + 'px';
    }

    handlePopup = () => {
        this.setState({ showPopup: !this.state.showPopup });
    }

    render() {
        return (
            <button className="button" id="avatar" ref={this.refContent} onKeyDown={this.handleOnKeyPressed} onClick={this.handlePopup} ></button>
        );
    }

}

const condition =  authUser => {
    if (authUser) ; return !!authUser};
  
  export default withAuthorization(condition)(Avatar);