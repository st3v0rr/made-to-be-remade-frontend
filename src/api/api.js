const hostUrl = "localhost:3000";

export async function getShoe(id) {
    return await fetch(hostUrl + "/shoes/" + id);
}

export function getShoeMock(id) {
    return {
        id: "500",
        pictureUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1631c4dcd7bc4206ad12ae0c0152c941_9366/ultraboost-dna-5.0-laufschuh.jpg",
        ownerAdressing: "Andreas Kreuz",
        description: "Description",
    }
}


