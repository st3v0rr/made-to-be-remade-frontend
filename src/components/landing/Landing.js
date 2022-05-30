import './Landing.scss';
import React from 'react';
import {getShoe} from "../../api/api";

class Landing extends React.Component {

    constructor() {
        super();
        this.state = {
            shoe: undefined,
        }
    }

    async componentDidMount() {
        // const shoe = getShoeMock(1);
        const response = await getShoe(0x967e6740dbec357dF5d290f7703dD59765C729d1);
        let shoe = await response.json();
        this.setState({shoe});
    }

    render() {
        if (this.state.shoe === undefined) {
            return <div/>
        }
        return (
            <div className="App">
                <b>Senden sie ihren Schuh zurück und kassieren Sie Punkte!</b>

                <div className="shoe-panel">
                    <span>Nummer: {this.state.shoe.id}</span>
                    <span>Owner: {this.state.shoe.ownerAdressing}</span>
                    <span>Beschreibung: {this.state.shoe.description}</span>
                    <img src={this.state.shoe.pictureUrl} alt="Bild"/>
                </div>
            </div>);
    }
}

export default Landing;
