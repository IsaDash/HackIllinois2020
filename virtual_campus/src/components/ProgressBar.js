import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            </ProgressBar>
            
        );
    }
}
export default ProgressBar;