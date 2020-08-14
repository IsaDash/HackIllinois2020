import React, {Component, Fragment} from 'react';
import './ProgressBar.css'
class ProgressBar extends React.Component {

    constructor() {
        super();
        this.state = {
            percentage: 0
        }
    }
    render() {
        return (
            <div>
                <div className="ProgressBar" />
                <Fragment>
                <ProgressBar percentage={this.state.percentage} />
                <button onClick={() => this.setState({percentage: this.state.percentage + 25})}>Next</button>
                </Fragment>

            </div>
            
            
        );
    }
}
export default ProgressBar;