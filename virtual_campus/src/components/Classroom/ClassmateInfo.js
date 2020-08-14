import React from 'react';
import '../Home/Avatar.css'
import flowerProfile from '../images/flowerProfile.jpg'
import { withAuthorization } from '../Session';


class ClassmateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: parseInt(props.avatar.left_coord) + 50 + 'px',
            top: parseInt(props.avatar.top_coord) + 200 + 'px',
            firstName: props.avatar.firstName,
            lastName: props.avatar.lastName,
            major: props.avatar.major,
            year: props.avatar.year,
            about: props.avatar.aboutyou


        }
        console.log(this.props.firebase.auth.currentUser.uid);
    }

    render() {
        var leftMargin = this.state.left;
        var topMargin = this.state.top;
        return (  
            <div className = "Classmate-Bio" style={{left: leftMargin, top: topMargin, alignItems:'center', position:'absolute'}}>  
                <img className="Profile-Picture" src={flowerProfile} alt="profilePic" />
                <h3 className="Header-Text" style={{marginTop:'25px'}} >{this.state.firstName + ' ' + this.state.lastName} </h3>
                <h3 className="Header-Text" >{this.state.major}</h3>
                <h3 className="Header-Text" >{this.state.year}</h3>
                <h5 className="Description-Text" style={{textAlign:'center'}} > 
                    {this.state.about}
                 </h5>
                 <div > 
                    <button className='center' onClick={this.props.closePopup}>Close</button>    
                 </div>
                
            </div>
            );  
              
    }
}
const condition =  authUser => {
    if (authUser) ; return !!authUser};
  
  export default withAuthorization(condition)(ClassmateInfo);