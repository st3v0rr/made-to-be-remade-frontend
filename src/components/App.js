import './App.scss';
import React from 'react';
import {
    Route, Routes
} from "react-router-dom";
import Shop from "./shop/Shop";
import Landing from "./landing/Landing";
import Header from "./header/Header";

class App extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/landing" element={<Landing/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/" element={<Shop/>}/>
                </Routes>
            </div>);
    }
}

export default App;
