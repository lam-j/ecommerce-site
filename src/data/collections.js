let collections = [
    {
        collectionId: "c1",
        name: "Men",
        image: "/images/pexels-jens-mahnke-1153838.jpg",
    },
    {
        collectionId: "c2",
        name: "Women",
        image: "/images/pexels-maor-attias-5191109.jpg",
    },
    {
        collectionId: "c3",
        name: "Summer",
        image: "/images/pexels-andrea-piacquadio-3779751.jpg",
    },
    {
        collectionId: "c4",
        name: "Fall",
        image: "/images/pexels-tatiana-syrikova-3932882.jpg",
    },
];

export function getCollections() {
    return collections;
}

export function getCollection(id) {
    return collections.find((collection) => collection.productId === id);
}
