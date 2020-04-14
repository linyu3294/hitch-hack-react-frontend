import React from 'react';
import './App.css';
import './style/style.css'
import MapChart from "./components/Map/MapChart";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import mapReducer from "./reducers/mapReducer";
import cityReducer from "./reducers/cityReducer";
import countryReducer from "./reducers/countryReducer";


const rootReducer = combineReducers({
    world: mapReducer,
    city: cityReducer,
    country: countryReducer
});

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store = {store}>
            <div>
                <MapChart
                />
            </div>
        </Provider>
    );
}

export default App;
