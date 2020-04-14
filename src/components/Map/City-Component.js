import React from "react";
import {Marker} from "react-simple-maps";

class CityComponent extends React.Component{
    constructor(props) {
        super(props)
    }



    render() {
        return (
            this.props.city.continent === "South America" &&
            <Marker key="That" coordinates={this.props.city.coordinates}>
                <circle
                    r={5}
                    fill="#F00"
                    stroke="#fff"
                    strokeWidth={2}
                    onClick={
                        () => {
                            this.props.handleCityClick(this.props.city.coordinates)
                        }
                    }/>

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


export default (CityComponent)
