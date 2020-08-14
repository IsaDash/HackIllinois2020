import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
class Progressbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
            </ProgressBar>
            
        );
    }
}
export default ProgressBar;