import React from 'react';
import './Grainger.css'

class Grainger extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
          <div className = "Room-Info" >  
          <h1>WELCOME TO GRAINGER ENGINEERING LIBRARY</h1>
          <h3 style={{color:"white", textAlign:"left", marginLeft: "2%", marginRight:"2%"}}>  
              We all get the feeling of unproductivity when we are in our dorm rooms or apartments. 
              Whether is striking a conversation with your roommate(s), reaching for food in your fridge,
              or someone having guests over, there are so many ways to get off track and distracted.
          </h3>
          <h3 style={{color:"white", textAlign:"left", marginLeft:"2%", marginRight:"2%"}}>  
              Fortunately, UIUC provides students with many places to study and get work done with friends (if you want!)
              No matter your study habits and style, there is definitely a place for you! 
          </h3>
          <h3 style={{color:"white", textAlign:"left", marginLeft:"2%", marginRight:"2%"}}>  
              UIUC has multiple libraries. Grainger Engineering Library (the library you're in right now), ACES(Funk) Library, 
              Undergraduate Library, and the Main Library are just a few of them! Let's explore the Grainger Engineering Library!
          </h3>
          <button style={{marginTop:'5px', marginLeft: '40%', position:'absolute', backgroundColor:"#ec5990"}} 
            onClick={() => window.open("https://meet.google.com/bah-qjqe-vgq", "_blank")}>
            Click Me To Study With Others Virtually
          </button> 
          </div>

          <div className="Basement-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Basement</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
          The basement is good for group work. There's also study rooms in the basement with whiteboards 
            that you can reserve. The CBTF is also in the basement of grainger. The CBTF is a computer
            testing facility. It gives students the flexibility to schedule their exams/quizzes for their classes.
            Multiple classes uses this method for quizzes/exams. (Note: CBTF will be online for Fall 2020 due to COVID-19)

           </h5>   
      </div>

      <div className="First-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>First Floor</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
           Expresso Royale is on this floor. Maybe go when there's not a huge line? The coffee there
           is overpriced, but it's worth :). Especially when you're studying all day long. 
           The first floor is also great for group work, and there's tables with monitors if your group
           ever want to share your screen with each other. 
           </h5>  
      </div>

      <div className="Second-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Second Floor</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
            This is the quietest floor. If you want to jam pack 16 weeks of semester's material, this 
            is the place to go. Pro Tip: During finals, it's almost impossible to find a spot to sit on this 
            floor, so get to the library EARLY! Or if you're already awake from pulling an all nighter, 
            that shouldn't be a problem :)
           </h5>   
      </div>

      <div className="Third-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Third Floor</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
            This floor is similar to the second. Nothing special. It's quiet compared to the basement, first and 
            fourth floors. There's less seating, and there's alot of shelves with books on this floor. 
           </h5>  
      </div>

      <div className="Fourth-Floor">
          <h3 className="Header-Text" style={{marginTop:'15px'}}>Fourth Floor</h3>
          <h5 className="Description-Text" style={{marginLeft:'25px', marginRight:'25px'}}> 
            This is another place for group work.There are huge tables for you to collaborate.
            Also most of the study rooms are up there. You can reserve a spot in these study rooms. 
            They have whiteboards and markers that you can also checkout with you i-card. 
            There's also tutoring on this floor, which is great if you need some help with your homework!
           </h5>   
      </div>


        
        </div>

  
  
          
          

      

        );
    }
}
export default Grainger;

