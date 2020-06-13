import React from "react";
import {Geography, Marker, ZoomableGroup} from "react-simple-maps";
import {connect} from "react-redux";
import CityComponent from "./City-Component";



class  CountryComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state= this.props.country
    }
    componentDidMount() {
    }

    render() {
        return (
            <Geography
                geography={this.props.geo}

                onClick={
                    (e) => {
                        this.props.switchView(this.props.geo, this.props.projection, e)
                    }
                }
                style={{
                    default: {
                        fill: this.props.colors[this.props.iter],
                        outline: "none"
                    },
                    hover: {
                        outline: "none"
                    },
                    pressed: {
                        outline: "none"
                    }
                }}
            >

            </Geography>

        )
    }
}
const stateToPropertyMapper = state => {
    return {
        country: state.country.country
    }
}

export default connect(stateToPropertyMapper) (CountryComponent)
