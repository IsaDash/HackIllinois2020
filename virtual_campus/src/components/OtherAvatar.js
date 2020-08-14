import React from 'react';
import config from './Firebase/config'

class OtherAvatar extends React.Component {
    constructor(props) {
        super(props)

        firebase.initializeApp(config);
    }
    
}