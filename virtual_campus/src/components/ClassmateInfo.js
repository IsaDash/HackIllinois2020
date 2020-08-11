import React from 'react';
import './Avatar.css'

class ClassmateInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Speech-Bubble" >
                <div className="Profile-Picture"></div>
            </div>
        );
    }
}

export default ClassmateInfo;