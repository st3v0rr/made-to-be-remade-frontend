import './Landing.scss';
import React from 'react';
import {getShoe} from "../../api/api";
import Web3 from "web3";

class Landing extends React.Component {

    ERC20TransferABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

    DAI_ADDRESS = "0x632487942AA1c4804769FAC1A4584783B5b0c00e"
    senderAddress = "0xb6bE89974B07F0bE1562E5F453b912368A7bF139"
    receiverAddress = "0xE3538B7d18cbEbAdB53c1DF084c68A4aE2b1AAa4"

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
        const lastItem = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        const web3 = new Web3("http://localhost:7545");
        console.log(web3);
        const daiToken = new web3.eth.Contract(this.ERC20TransferABI, this.DAI_ADDRESS);
        console.log(lastItem);

        daiToken.methods
            .approve(this.receiverAddress, lastItem)
            .send({from: this.senderAddress}, function (err, res) {
                if (err) {
                    console.log("An error occured", err)
                    return
                }
                console.log("Hash of the transaction: " + res)
            })

        daiToken.methods
            .safeTransferFrom(this.senderAddress, this.receiverAddress, lastItem)
            .send({from: this.senderAddress}, function (err, res) {
                if (err) {
                    console.log("An error occured", err)
                    return
                }
                console.log("Hash of the transaction: " + res)
            })

        // const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        // console.log(accounts);
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
