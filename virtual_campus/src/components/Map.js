import React from 'react';
import ImageMapper from 'react-image-mapper';
import './Map.css'
import Avatar from './Avatar'

class Map extends React.Component {
    
    constructor(props) {
      super(props)
    }
    render () {
        var AREAS_MAP = {
            name: "my-map",
            areas: [
                { name: "foellinger", shape: "poly", coords: [1659,1165,1766,1097,1865,1186,1769,1260], preFillColor: 'rgba(255, 255, 255, 0.1)', lineWidth:2, fillColor: 'rgba(255, 255, 255, 0.5)'  },
                { name: "Illini Union", shape: "poly", coords: [1265,722,1428,864,1268,943,1084,799], preFillColor: 'rgba(255, 255, 255, 0.1)', lineWidth:2, fillColor: 'rgba(255, 255, 255, 0.5)'  },
                { name: "Grainger", shape: "poly", coords: [702,482,795,569,1028,458,964,369], preFillColor: 'rgba(255, 255, 255, 0.1)', lineWidth:2, fillColor: 'rgba(255, 255, 255, 0.5)'  },
                { name: "Siebel", shape: "poly", coords: [816,194,825,114,872,80,899,108,1034,46,1084,89,1081,191,955,246,896,252], preFillColor: 'rgba(255, 255, 255, 0.1)', lineWidth:2, fillColor: 'rgba(255, 255, 255, 0.5)'  },
                { name: "ECE", shape: "poly", coords: [217,261,321,215,407,298,407,320,297,366,269,347,208,307], preFillColor: 'rgba(255, 255, 255, 0.1)', lineWidth:2, fillColor: 'rgba(255, 255, 255, 0.5)'  },
                { name: "Noyes", shape: "poly", coords: [1437,833,1569,774,1683,860,1557,928], preFillColor: 'rgba(255, 255, 255, 0.1)', lineWidth:2, fillColor: 'rgba(255, 255, 255, 0.5)'  },
            ]
        }
      return (
        <div>
            
            <ImageMapper className='map' src={require('./images/uiuc_map_cropped.jpg')} map={AREAS_MAP}/>
           
        </div>
        
      );
    }
    
  }

  export default Map;

