import React from 'react';
import Popup from "reactjs-popup";
//import ArrowKeysReact from 'arrow-keys-react';
import './Avatar.css'
import ClassmateInfo from './ClassmateInfo'
import AvatarImage from './images/avatar.png'

var avatar = null
class Avatar extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            showPopup: false
        }
        this.makeAvatar = this.makeAvatar.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.handleOnKeyPressed = this.handleOnKeyPressed.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
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
        console.log(e.which || e.keyCode);
        var key_code=e.which||e.keyCode;
		switch(key_code){
			case 90: 
                this.moveLeft();
                console.log("left")
				break;
			case 83: 
                this.moveUp();
                console.log("up")
				break;
			case 67: 
                this.moveRight();
                console.log("right")
				break;
			case 88:
                this.moveDown();
                console.log("down")
				break;						
        }
    }

    moveLeft = () => {
        avatar.style.left = parseInt(avatar.style.left) - 5 + 'px';
    }

    moveRight = () => {
        avatar.style.left = parseInt(avatar.style.left) + 5 + 'px';
    }

    moveUp = () => {
        avatar.style.top = parseInt(avatar.style.top) - 5 + 'px';
    }

    moveDown = () => {
        avatar.style.top = parseInt(avatar.style.top) + 5 + 'px';
    }

    handlePopup = () => {
        this.setState({ showPopup: !this.state.showPopup });
    }

  render () {
  //  <div id = "avatar" onKeyDown={this.handleOnKeyPressed} tabIndex="0" ></div>
  
    return (
        //TODO: closePopup() should open chat screen to chat with the user. 
      <div>
         <button className="button" id="avatar" onKeyDown={this.handleOnKeyPressed} onClick={this.handlePopup} ></button>
        <div>
        {this.state.showPopup ?  
            <ClassmateInfo closePopup={this.handlePopup} />  
            : null  
        } 
        </div> 
      </div>
    );
  }
  
}

export default Avatar;