import React, {Component} from "react"
import {ComposableMap, Geographies, Marker, ZoomableGroup} from "react-simple-maps"
import {Spring} from 'react-spring/renderprops'
import chroma from "chroma-js"
import Countries from "./Countries";
import {geoTimes} from "d3-geo-projection";
import {geoPath} from "d3-geo";
import "../component.style.css"

//World Map Json File
const world = require("./JsonFiles/world");
const cities = require("./JsonFiles/cities")


//Randomized color scheme that will casted to each country
const colorScale = chroma.brewer.Pastel2.slice(1)
const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min)
const colors = Array(180)
    .fill()
    .map(d => colorScale[getRandomInt(0, colorScale.length - 1)])



class MapChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 500,
            height: 700,
            detail: false,
            paths: world,
            center: [0,0],
            zoom: 1
        }

    }
    projection() {
        return geoTimes()
            .translate([this.state.width/2, this.state.height/2])
            .scale(180)
    }


    // ZoomControl=()=> {
    //     (this.props) = useSpring({zoom: 2, from: {zoom: 1}})
    // }
    switchPaths = (geo, projection, evt) => {
        // alert(geo.properties.ISO_A3)

        const gp = geoPath().projection(projection)
        const dim = evt.target.getBoundingClientRect()
        const cx = evt.clientX - dim.left
        const cy = evt.clientY - dim.top
        const [orgX, orgY] = gp.bounds(geo)[0]
        const centeroid = this.projection().invert([orgX + cx, orgY + cy])


        const { detail } = this.state;
        this.setState(prevState => ({
            ...prevState,
            paths: detail ? world :this.state.paths,
            center: detail? [0,0]: centeroid,
            zoom: detail ? 1 : 6,
            detail: !detail
        }));
    };

    render() {

        return(

            <Spring
                from={{ zoom: 2 }}
                to={{ zoom: this.state.zoom }}

            >
                {styles =>(
                    <div ref={wrapper => this._wrapper = wrapper} className= "container">
                        {/*<animated.div style={zoomIn}>I will fade in</animated.div>*/}
                        <ComposableMap
                            width={this.props.width}
                            height={this.props.height}
                            projection={this.projection()}
                            // className="ratio-container-content ratio-container"
                        >
                            <ZoomableGroup   center={this.state.center}
                                             zoom={styles.zoom}>
                                <Geographies geography={this.state.paths}>
                                    {
                                        ({geographies, projection}) =>
                                            geographies.map((geo,iter) =>
                                                <Countries
                                                    key = {geo.properties.ISO_A3 + iter}
                                                    geo = {geo}
                                                    iter ={iter}
                                                    projection = {projection}
                                                    colors = {colors}
                                                    switchPaths={this.switchPaths}
                                                />
                                            )
                                    }
                                </Geographies>
                                {this.state.detail === true &&
                                cities.map(city =>
                                    (city.continent === "South America" &&
                                        <Marker key="That" coordinates={city.coordinates}>
                                            <circle
                                                r={5}
                                                fill="#F00"
                                                stroke="#fff"
                                                strokeWidth={2}
                                                onClick={()=>alert("You Clicked " + city.name)}
                                            />
                                            <text
                                                textAnchor="top"
                                                strokeWidth={2}
                                                style={{fontFamily: "system-ui", fill: "#5D5A6D", fontSize: 4}}
                                            >
                                                {city.name}
                                            </text>
                                        </Marker>
                                        )
                                )
                                }

                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                )}
            </Spring>
        )
    }
}
export default MapChart
