import React from "react";
import {Line} from "react-simple-maps";
import mapService from "../../services/mapService";

class FlightComponent extends React.Component{
    constructor(props) {
        super(props);
    }


     render() {
         return(

             <Line
                 from={this.props.origin.coordinates}
                 to={this.props.destination.coordinates}
                 stroke="#FF5533"
                 strokeWidth={2}
                 strokeLinecap="round"

             />


         )
     }
}

export default FlightComponent
