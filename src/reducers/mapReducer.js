
const world = require("../components/Map/JsonFiles/world")
const initialState = {
        width: 500,
        height: 700,
        detail: false,
        paths: world,
        center: [0, 0],
        zoom: 1,
        origin: '',
        destination: '',
        count: 0

}

const mapReducer = (state = initialState, action) => {
    return {
        world: state
    }
}

export default mapReducer
