import React from 'react';
import './IlliniUnion.css'
import { withAuthorization } from './Session';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

class IlliniUnion extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
              <Link to={ROUTES.HOME} style={{color: "white"}}>Return To Map</Link>
          <div className = "IllRoom-Info" >  
          <h1>WELCOME TO ILLINI UNION</h1>
          <h3 style={{color:"white", textAlign:"left", marginLeft: "2%", marginRight:"2%"}}>  
              There are so many things to do here! The Illini Union is in the center of campus. 
              It's in the midst of student life. This is a great place to grab a snack/meal in between
              classes or just hang around with some friends.
          </h3>
          <h3 style={{color:"white", textAlign:"left", marginLeft:"2%", marginRight:"2%"}}>  
              Let's Check This Place Out! 
          </h3>
          <button style={{marginTop:'5px', marginLeft: '5%', position:'absolute', backgroundColor:"#ec5990"}} 
            onClick={() => window.open("https://meet.google.com/pbz-bsbu-uob", "_blank")}>
            Come Hang Out
          </button>  
          </div>
         
          <div className="Food-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Basement</h3>
          <h3 className="Header-Text" style={{marginTop:'15px'}}>There's amazing food here!</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
            <li>Eintein Bro Bagels - best bagels ever!</li>
            <li>Blaze Pizza - it's pizza. what's more to say? </li>
            <li>Wendy - cheap meal?</li>
            <li>Qdoba - basically chipotle :)</li>
            <li>Garbanzo - okay, this place is amazing</li>
           </h5> 
      </div>

      <div className="Main-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Main Floor - Cafe</h3>
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Always crowded!</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
            This is the heart of the Illini Union. There's a cafe area where it's always almost
            impossible to find a seat. But if you do, it's a great studying place in between
            your classes. There's a starbucks here, that always has a huge line! But hey, it's 
            probably the most convenient place to get coffee. 
           </h5> 
      </div>

      <div className="Main-FloorStudy">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Main Floor - President Lounge</h3>
          <h3 className="Header-Text" style={{marginTop:'15px'}}>It's QUIET</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
            Some people claim this is one of their favorite places to study. Try it out. 
            It's relatively quiet compare to the rest of the union!
           </h5> 
      </div>  
        </div>

  
  
          
          

      

        );
    }
}
export default IlliniUnion;