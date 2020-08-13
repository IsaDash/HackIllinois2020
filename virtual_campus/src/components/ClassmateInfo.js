import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAvatarMovementLeft } from '../redux/modules/EditAvatar';


import './Avatar.css'
import flowerProfile from './images/flowerProfile.jpg'


class ClassmateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: props.left,
            top: props.top
        }
    }

    render() {
        var leftMargin = this.state.left;
        var topMargin = this.state.top;
        return (  
            <div className = "Classmate-Bio" style={{left: leftMargin, top: topMargin}}>  
                <img className="Profile-Picture" src={flowerProfile} alt="profilePic" />
                <h3 className="Header-Text" style={{marginTop:'25px'}} >firstName LastName</h3>
                <h3 className="Header-Text" >Major</h3>
                <h3 className="Header-Text" >Year</h3>
                <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}} > 
                    This is an example bio of someone. they can say whatever they want up to 
                    a certain character limit. This guarantees that it'll fit into this 
                    description/bio box.  blah blah blah
                    placeholder placeholder placeholder
                    placeholder placeholder
                    placeholder
                 </h5>
                <button style={{marginTop:'25px', marginLeft: '125px', position:'relative'}} onClick={this.props.closePopup}>Chat With Me</button>    
            </div>
            );  
              
    }
}


const mapStateToProps = state => {
    return {
        avatar: state.editAvatar.avatar,
        left: state.editAvatar.left
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        updateAvatarMovementLeft
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassmateInfo);
//export default ClassmateInfo;