/*import './Landing.scss';
import React, {useState} from 'react';
import {getShoe} from "../../api/api";
import {useParams} from "react-router-dom";

export default function Landing() {

    const [shoe, setShoe] = useState(0);


    async
    componentDidMount()
    {
        // const shoe = getShoeMock(1);
        const response = await getShoe(0x967e6740dbec357dF5d290f7703dD59765C729d1);
        let shoe = await response.json();
        this.setState({shoe});
    }

    const {id} =useParams();
    if (shoe === undefined) {
        return <div/>
    }
    return (
        <div className="App">
            <b>Senden sie ihren Schuh zurück und kassieren Sie Punkte!</b>{id}

            <div className="shoe-panel">
                <span>Nummer: {shoe.id}</span>
                <span>Owner: {shoe.ownerAdressing}</span>
                <span>Beschreibung: {shoe.description}</span>
                <img src={shoe.pictureUrl} alt="Bild"/>
            </div>
        </div>);
}*/
