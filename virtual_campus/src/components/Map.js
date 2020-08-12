import React from "react";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import { render } from "react-dom";
import './Map.css'
import Avatar from './Avatar'

function Map() {
    return (
        <div className='map'>
           <Avatar></Avatar>
        </div>
    );
    
}
export default Map;