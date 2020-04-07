import React from "react";
import { connect } from "react-redux";
import {Marker} from "react-simple-maps";

class CityComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cityClicked: false,
            redrawCounter: 0
        }
    }

    handleCityClick = () => {
        alert("hello")
        this.setState({cityClicked: true})}


    countRedraw = () => {
        alert("hello")
        this.setState(prevState =>{
           return{
                redrawCounter : prevState.redrawCounter +1,
                cityClicked: false
            }
        })
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
                                    this.handleCityClick()
                                    alert("You Clicked " + this.props.city.name + " " +
                                        "| RedrawIndicator : " + this.state.redrawCounter)
                                }
                            }
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


export default  CityComponent
