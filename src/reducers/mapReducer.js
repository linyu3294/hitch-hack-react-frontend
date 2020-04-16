const world = require("../components/Map/JsonFiles/world")
const cities = require("../components/Map/JsonFiles/cities")
const initialState = {
    width: 500,
    height: 700,
    detail: false,
    paths: world,
    cities : cities,
    zoom: 1,
    origin: {},
    destination: {},
    redrawCounter: false
}

const mapReducer = (state = initialState, action) => {
    return {
        world: state
    }
}

export default mapReducer
