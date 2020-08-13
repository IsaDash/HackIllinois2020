import React from 'react';
//import ArrowKeysReact from 'arrow-keys-react';
import './Avatar.css'
import ClassmateInfo from './ClassmateInfo'
import AvatarImage from './images/avatar.png'
import ImageMapper from 'react-image-mapper';
import Map from './Map'


var avatar = null
class Avatar extends React.Component {    
    constructor(props) {
        super(props)
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

    refContent = (content) => {
        this.content = content;
    }
 
    actions = {
        onMouseMove: (e) => {
            // Start auto scrolling
           
        },
        onMouseOut: (e) => {
            // Stop auto scrolling if any
        
        }
    };

    componentDidMount() {
        this.makeAvatar();
        console.log("started");
    }

    makeAvatar = () => {
        avatar = document.getElementById("avatar");
        avatar.style.position = 'relative';
        avatar.style.left = '0px';
        avatar.style.top = '0px';

        this.setState({
            avatarLeft: 0
        });
    }

    handleOnKeyPressed = (e) => {

        var key_code=e.which||e.keyCode;
        console.log(key_code)
		switch(key_code){
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

  render () {
    return (
      <div className="Background">
        
        <button className="button" id="avatar" ref={this.refContent} onKeyDown={this.handleOnKeyPressed} onClick={this.handlePopup} ></button>

        {this.state.showPopup ?  
            <ClassmateInfo left={parseInt(avatar.style.left) + 50 + 'px'} top={parseInt(avatar.style.top) + 200 + 'px'} closePopup={this.handlePopup} />  
            : null  
        } 
     
      </div>
    );
  }
  
}

export default Avatar;