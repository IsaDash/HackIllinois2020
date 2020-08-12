import React from "react";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

const Map = () => {
    return (
        <div className='map'>
            <PinchZoomPan>
                <img alt='Test Image' src={require('./uiuc_map.jpg')} />
            </PinchZoomPan>
        </div>
    );
};

export default Map;