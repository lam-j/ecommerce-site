let products = [
    {
        productId: 1,
        designer: "Sneaker Company",
        name: "Fall Limited Edition Sneakers",
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        originalPrice: "250.00",
        discount: "50",
        currentPrice: "125.00",
        productImages: [
            "./images/image-product-1.jpg",
            "./images/image-product-2.jpg",
            "./images/image-product-3.jpg",
            "./images/image-product-4.jpg",
        ],
        thumbnailImages: [
            "./images/image-product-1-thumbnail.jpg",
            "./images/image-product-2-thumbnail.jpg",
            "./images/image-product-3-thumbnail.jpg",
            "./images/image-product-4-thumbnail.jpg",
        ],
    },
];

export function getProduct(id) {
    return products.find((product) => product.productId === id);
}
