const hosturl = "http://localhost:8080";

export async function getProduct(id) {
    return await fetch(hosturl + "/products/" + id);
}

export async function getAllProducts() {
    return await fetch(hosturl + "/products");
}

export async function buyProduct(product) {
    product.ownerAdress = "0x6d82e50bdC657B1a2b36acb925801222fF0cADDB";
    return await fetch(hosturl + "/products", {
        method: 'POST',
        headers: {
            'Accept': 'application/jpeg',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
}

