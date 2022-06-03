import Web3 from "web3";
import React from 'react';

const hosturl = "http://localhost:8080";

export async function getProduct(id) {
    return await fetch(hosturl + "/products/" + id);
}

export async function getAllProducts() {
    return await fetch(hosturl + "/products");
}

export async function buyProduct(product) {
    var win = window.ethereum.selectedAddress;
    console.log(win)
    product.ownerAdress = win;

    return await fetch(hosturl + "/products", {
        method: 'POST',
        headers: {
            'Accept': 'application/jpeg',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
}

