import React from "react";
import { geoPath } from "d3-geo"
import {Geography, Marker, ZoomableGroup} from "react-simple-maps";



class  Countries extends React.Component {

    render() {
        return (
            <Geography
                geography={this.props.geo}
                // projection={this.props.projection}

                onClick={
                    (e)=>{
                        this.props.switchPaths(this.props.geo, this.props.projection, e)
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
export default Countries
