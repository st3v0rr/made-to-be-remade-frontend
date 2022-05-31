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
        const lastItem = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        const response = await getShoe(lastItem);
        let shoe = await response.json();
        this.setState({shoe});
    }

    handleClick = async () => {
       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
    }

    render() {
        if (this.state.shoe === undefined) {
            return <div/>
        }

        return (
            <div className="landing">
                <div><b>Senden sie ihren Schuh zurück und kassieren Sie Punkte!</b></div>

                <div className="shoe-panel">
                    <div>Nummer: {this.state.shoe.id}</div>
                    <div>Owner: {this.state.shoe.ownerAdressing}</div>
                    <div>Beschreibung: {this.state.shoe.description}</div>
                    <img src={this.state.shoe.pictureUrl} alt="Bild"/>
                    <button onClick={() => this.handleClick()}>Recyclen</button>
                </div>
            </div>);
    }
}

export default Landing;
