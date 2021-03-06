import './Landing.scss';
import React from 'react';
import {getProduct} from "../../api/api";
import Web3 from "web3";
import {useState} from 'react';


class Landing extends React.Component {


    ERC20TransferABI = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
        "name": "ApprovalForAll",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "Transfer",
        "type": "event"
    }, {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "getApproved",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }],
        "name": "isApprovedForAll",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "ownerOf",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "string",
            "name": "uri",
            "type": "string"
        }], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
        }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
        "name": "supportsInterface",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }];

    DAI_ADDRESS = "0xE9f97462F0e82cffE061a1B5B71b1E569806B95B"
    receiverAddress = "0x5414BD23f5F03C5f1aE4C31b86c1172130291DF5"
    senderAddress = typeof window.ethereum !== 'undefined' ? window.ethereum.selectedAddress : 'user';
    isMyToken = false;

    constructor() {
        super();
        this.state = {
            product: undefined
        }
    }

    async componentDidMount() {
        const lastItem = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        const response = await getProduct(lastItem);
        let product = await response.json();

        const web3 = new Web3("http://localhost:7545");
        const daiToken = new web3.eth.Contract(this.ERC20TransferABI, this.DAI_ADDRESS);
        const r = await daiToken.methods.ownerOf(lastItem).call()

        this.isMyToken = r.toUpperCase() === this.senderAddress.toUpperCase();

        this.setState({product});
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

    }

    render() {
        if (this.state.product === undefined) {
            return <div/>
        }

        return (
            <div className="landing">
                <div><b>Send your product to us and get rewards!</b></div>

                <div className="product-panel">
                    <div>Hello {typeof window.ethereum !== 'undefined' ? window.ethereum.selectedAddress : 'user'}</div>
                    <div>How can we help you with {this.isMyToken ? 'your purchased product?' : 'this product?'}</div>
                    <div>{this.state.product.name}</div>
                    <div>{this.state.product.description}</div>
                    <img src={this.state.product.imageUrl} alt="Bild"/>
                    {this.isMyToken ?
                        <button onClick={() => this.handleClick()}>Recycle</button>
                        : ""
                    }
                </div>
            </div>);
    }
}

export default Landing;
