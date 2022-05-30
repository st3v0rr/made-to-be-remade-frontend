import './App.scss';
import React from 'react';
import {getShoe, getShoeMock} from "../api/api";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            shoe: undefined,
        }
    }

    async componentDidMount() {
        const shoe = getShoeMock(1);
       // const response = getShoe(1);
      //  let shoe = await response.json();
        this.setState({shoe});
    }

    render() {
        if(this.state.shoe === undefined) {
            return <div/>
        }
        return (<div className="App">
            <header className="App-header">
                <b>Senden sie ihren Schuh zurück und kassieren Sie Punkte!</b>

                <div className="shoe-panel">
                    <span>Nummer: {this.state.shoe.id}</span>
                    <span>Owner: {this.state.shoe.ownerAdressing}</span>
                    <span>Beschreibung: {this.state.shoe.description}</span>
                    <img src={this.state.shoe.pictureUrl} alt="Bild"/>
                </div>
            </header>
        </div>);
    }
}

export default App;
