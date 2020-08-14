import React from 'react';
import './ClassInfo.css'
import { withAuthorization } from '../Session';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';



class ClassInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
          <Link to={ROUTES.HOME} style={{color: "white"}}>Return To Map</Link>
          <div className = "Room-Info" >
          <h1>WELCOME TO SIEBEL CENTER FOR COMPUTER SCIENCE</h1>
          </div>
          <div className="ClassOne-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS125</h3>
          <h4 className="Header-Text" >Professor: Challen, Geoffrey</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            This class gives you a foundation for all your future CS Classes so PAY ATTENTION!
            This is also a great class to meet new people.
            Don't be afraid to ask questions. The TAs and CAs are super friendly!
            Please Please Please start your MPs Early!
           </h5>
          <button style={{marginTop:'5px', marginLeft: '100px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/hro-qhvn-dnk", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassTwo-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS233</h3>
          <h4 className="Header-Text" >Professor: Herman, Geoffrey</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            The professor does a great job explaining all the key information you'll need
            for the MPs. This class will test your patience and ability to debug especially when using
            Verilog or MIPS. Do the practice Prarie Learn exams!
           </h5>
          <button style={{marginTop:'5px', marginLeft: '100px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/rcw-joux-ntw", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassThree-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS126</h3>
          <h4 className="Header-Text" >Professor: Woodley, Michael</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            START THE MP EARLY.
            START THE MP EARLY.
            START THE MP EARLY.
            Seriously, this isn't a class to test your procrastination skill.
            Start your MPs early and go to office hours.
            This class may seem useless, but it's not.
           </h5>
          <button style={{marginTop:'5px', marginLeft: '100px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/tmw-thvk-hus", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassFour-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS173</h3>
          <h4 className="Header-Text" >Professor: Cosman, Benjamin and Lin, Patrick</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            Fleck's textbook is really useful for the information for this class. Do the practice
            problems and previous examlets for practice! Also, office hours is really helpful if
            you don't get a concept.
           </h5>
          <button style={{marginTop:'22px', marginLeft: '115px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/azd-uhuc-hvt", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassFive-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS241</h3>
          <h4 className="Header-Text" >Professor: Angrave, Lawrence</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            START THE MP EARLY! Go to Office Hours. If you got away
            with not knowing how to properly debug code for your first few CS classes, start learning
            how to debug now. You're going to need it.
           </h5>
          <button style={{marginTop:'22px', marginLeft: '115px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/vgv-bofw-qkd", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassSix-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS357</h3>
          <h4 className="Header-Text" >Professor: Silva, Mariana</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            Be comfortable with linear algebra. Review beforehand especially if you took that class
            a couple semesters ago. Pay attention. Don't be afraid to ask questions if you need help.
           </h5>
          <button style={{marginTop:'25px', marginLeft: '115px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/gii-cyyn-tqt", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassSeven-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS225</h3>
          <h4 className="Header-Text" >Professor: Evans, Graham</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            This is one of the most important classes you'll ever take here at UIUC.
            Besides from being important for interviews,
            this class will build foundation for your other future CS classes. Do the MPs.
            Understand all the concepts on a deep level.
           </h5>
          <button style={{marginTop:'10px', marginLeft: '125px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("hhttps://meet.google.com/dme-bpae-rth", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassEight-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS374</h3>
          <h4 className="Header-Text" >Professor: Har-Peled, Sariel and Miller, Andrew</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            Start the homework early! It might be easier to just split each homework problems
            with everyone in your group, but don't. You won't learn anything that way.
            Go to office hours and check piazza.
            The curve is generous, so focus on learning.
           </h5>
          <button style={{marginTop:'10px', marginLeft: '125px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/ade-ogqi-jff", "_blank")}>
            Join Study Group
          </button>
      </div>

      <div className="ClassNine-Info">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>CS421</h3>
          <h4 className="Header-Text" >Professor: Beckman, Mattox</h4>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}>
            Pay attention in class and ask for help when you need it. Like every CS class, start
            the MPs early. Do all the work to the best of your ability and continue to work hard.
           </h5>
          <button style={{marginTop:'25px', marginLeft: '125px', position:'absolute', backgroundColor:"#ec5990"}}
            onClick={() => window.open("https://meet.google.com/pqx-oapc-cpm", "_blank")}>
            Join Study Group
          </button>
      </div>


      </div>
        );
    }
}
const condition =  authUser => {
  if (authUser) console.log(authUser.uid); return !!authUser};
export default withAuthorization(condition)(ClassInfo);
