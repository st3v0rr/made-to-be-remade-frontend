const hosturl = "http://localhost:8080";

export async function getShoe(id) {
    return await fetch(hosturl + "/shoes/" + id);
}

export async function getAllProducts() {
    return await fetch(hosturl + "/products");
}

export async function buyProduct(product) {
    product.ownerAdress = "0xb6bE89974B07F0bE1562E5F453b912368A7bF139";
    return await fetch(hosturl + "/products", {
        method: 'POST',
        headers: {
            'Accept': 'application/jpeg',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
}

export function getAllProductsMock() {
    return [
        {imageUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8eda6f98e4840b3a988ad2101578329_9366/zx-2k-boost-2.0-schuh.jpg"},
        {imageUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8eda6f98e4840b3a988ad2101578329_9366/zx-2k-boost-2.0-schuh.jpg"},
        {imageUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8eda6f98e4840b3a988ad2101578329_9366/zx-2k-boost-2.0-schuh.jpg"},
        {imageUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8eda6f98e4840b3a988ad2101578329_9366/zx-2k-boost-2.0-schuh.jpg"}
    ];
}

export function getShoeMock(id) {
    return {
        id: "500",
        pictureUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1631c4dcd7bc4206ad12ae0c0152c941_9366/ultraboost-dna-5.0-laufschuh.jpg",
        ownerAdressing: "Andreas Kreuz",
        description: "Description",
    }
}


