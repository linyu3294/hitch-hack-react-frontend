import React, {Component} from "react"
import { connect } from "react-redux";
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps"
import {Spring} from 'react-spring/renderprops'
import chroma from "chroma-js"
import CountryComponent from "./Country-Component"
import {geoTimes} from "d3-geo-projection"
import {geoPath} from "d3-geo"
import "../component.style.css"
import CityComponent from "./City-Component"
import { Line } from "react-simple-maps"


//Randomized color scheme that will casted to each country
const colorScale = chroma.brewer.Pastel2.slice(1)
const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min)
const colors = Array(180)
    .fill()
    .map(d => colorScale[getRandomInt(0, colorScale.length - 1)])


class MapChart extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.world
    }

    projection() {
        return geoTimes()
            .translate([this.state.width / 2, this.state.height / 2])
            .scale(180)
    }

    switchView = (geo, projection, evt) => {
        // alert(geo.properties.ISO_A3)
        const gp = geoPath().projection(projection)
        const dim = evt.target.getBoundingClientRect()
        const cx = evt.clientX - dim.left
        const cy = evt.clientY - dim.top
        const [orgX, orgY] = gp.bounds(geo)[0]
        const centeroid = this.projection().invert([orgX + cx, orgY + cy])

        const {detail} = this.state;
        this.setState(prevState => ({
            ...prevState,
            paths: detail ? this.state.worldMap : this.state.paths,
            center: detail ? [0, 0] : centeroid,
            zoom: detail ? 1 : 6,
            detail: !detail
        }))
    }

    handleCityClick = (cityName) => {
        this.setState(prevState => ({
            ...prevState,
            origin: prevState.redrawCounter ?  this.state.origin : cityName,
            destination:  prevState.redrawCounter ? cityName: "",
            redrawCounter: !prevState.redrawCounter,
        }))
    }


    render() {
        return (
            <Spring
                from={{zoom: 2}}
                to={{zoom: this.state.zoom}}

            >
                {styles => (
                    <div ref={wrapper => this._wrapper = wrapper} className="container">
                        <ComposableMap
                            width={this.props.width}
                            height={this.props.height}
                            projection={this.projection()}
                        >
                            <ZoomableGroup center={this.state.center}
                                           zoom={styles.zoom}>
                                <Geographies geography={this.state.paths}>
                                    {
                                        ({geographies, projection}) =>
                                            geographies.map((geo, iter) =>
                                                <CountryComponent
                                                    key={geo.properties.ISO_A3 + iter}
                                                    geo={geo}
                                                    iter={iter}
                                                    projection={projection}
                                                    colors={colors}
                                                    switchView={this.switchView}
                                                    detail = {this.state.detail}
                                                />
                                            )
                                    }
                                </Geographies>
                                {this.state.detail === true &&
                                this.state.cities.map(city =>
                                    <CityComponent
                                        city = {city}
                                        origin = {this.state.origin}
                                        destination = {this.state.destination}
                                        redrawCounter = {this.state.redrawCounter}
                                        handleCityClick = {this.handleCityClick}
                                    />
                                )}
                                <Line
                                    from={this.state.origin}
                                    to={this.state.destination}
                                    stroke="#FF5533"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />

                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                )}
            </Spring>
        )
    }
}


const stateToPropertyMapper = state => {
    return {
        world: state.world.world
    }
}

export default connect(stateToPropertyMapper) (MapChart)
