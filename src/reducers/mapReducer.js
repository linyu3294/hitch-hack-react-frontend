const world = require("../components/Map/JsonFiles/world")
const cities = require("../components/Map/JsonFiles/cities")
const initialState = {
    width: 500,
    height: 700,
    detail: false,
    worldMap: world,
    paths: world,
    cities : cities,
    center: [0, 0],
    zoom: 1,
    origin: "",
    destination: "",
    redrawCounter: false
}

const mapReducer = (state = initialState, action) => {
    return {
        world: state
    }
}

export default mapReducer
