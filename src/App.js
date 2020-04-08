import React from 'react';
import './App.css';
import './style/style.css'
import MapChart from "./components/Map/MapChart";
import {combineReducers, createStore} from "redux";
import mapReducer from "./reducers/mapReducer";
import {Provider} from "react-redux";


const rootReducer = combineReducers({
    world: mapReducer
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
