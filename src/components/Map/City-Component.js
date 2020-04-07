import React from "react";
import {Marker} from "react-simple-maps";

class CityComponent extends React.Component{
    render() {


        return (

                this.props.city.continent === "South America" &&
                    <Marker key="That" coordinates={this.props.city.coordinates}>
                        <circle
                            r={5}
                            fill="#F00"
                            stroke="#fff"
                            strokeWidth={2}
                            onClick={() => alert("You Clicked " + this.props.city.name)}
                        />
                        <text
                            textAnchor="top"
                            strokeWidth={2}
                            style={{fontFamily: "system-ui", fill: "#5D5A6D", fontSize: 4}}
                        >
                            {this.props.city.name}
                        </text>
                    </Marker>

        )
    }


}
export default CityComponent
