import React from "react";
import {Geography} from "react-simple-maps";



class  CountryComponent extends React.Component {

    render() {
        return (
            <Geography
                geography={this.props.geo}
                // projection={this.props.projection}

                onClick={
                    (e)=>{
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
export default CountryComponent
