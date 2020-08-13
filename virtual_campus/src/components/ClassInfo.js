import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class ClassInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <CardColumns>
            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 173</Card.Subtitle>
                <Card.Text>
                  Discrete Structure
                  This is a CS class where you can find the coolest people on campus, 
                  mostly Asians. Here you should see avatars of people that enrolled in
                  this class. 
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>

            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 225</Card.Subtitle>
                <Card.Text>
                  Data Structure 
                  A very useful class taught by a not so amazing professor 
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>

            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 241</Card.Subtitle>
                <Card.Text>
                System Programming 
                A card class  
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>

            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 374</Card.Subtitle>
                <Card.Text>
                RIP ALGO  
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>

            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 440</Card.Subtitle>
                <Card.Text>
                FUN TIME 
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>

            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 446</Card.Subtitle>
                <Card.Text>
                More like a math class 
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>

            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 125</Card.Subtitle>
                <Card.Text>
                Intro to Comp Sci 
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>
            
            <Card bg='light' border='dark' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CS 105</Card.Subtitle>
                <Card.Text>
                CS for non-major ?
                </Card.Text>
                <Button variant="primary">Study Group</Button>
              </Card.Body>
            </Card>
          </CardColumns>
        );
    }
}
export default ClassInfo;

