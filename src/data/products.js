let products = [
    {
        productId: 1,
        designer: "Sneaker Company",
        name: "Fall Limited Edition Sneakers",
        category: ["men", "women", "lifestyle", "skateboarding"],
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        inStock: true,
        originalPrice: "250.00",
        discount: "50",
        currentPrice: "125.00",
        productImages: [
            "/images/image-product-1.jpg",
            "/images/image-product-2.jpg",
            "/images/image-product-3.jpg",
            "/images/image-product-4.jpg",
        ],
        thumbnailImages: [
            "/images/image-product-1-thumbnail.jpg",
            "/images/image-product-2-thumbnail.jpg",
            "/images/image-product-3-thumbnail.jpg",
            "/images/image-product-4-thumbnail.jpg",
        ],
    },

    {
        productId: 2,
        designer: "Nike",
        name: "Nike Air Presto x Hello Kitty®",
        category: ["women", "lifestyle"],
        description:
            "Let myth become reality and step into a world of rainbows and sunshine with the Nike Air Presto x Hello Kitty. From the custom molded Hello Kitty heel to her red bow on the tongue, your favorite supercute cartoon character joins your journey.",
        inStock: true,
        originalPrice: "140.00",
        discount: "0",
        currentPrice: "140.00",
        productImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/398b3bbb-a881-49c3-ae39-26e64d91566d/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/981f84e3-3723-4f38-a750-704e35ac61de/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84b6fc7d-ca9a-473c-8a90-f9796d33f8b5/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/188bf288-9154-4fd2-815f-1cc3110094ad/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0185e762-d9c2-41e5-8014-98f80e5810f7/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fa1ab70c-f4ac-4ff0-b41f-0bcd4620086f/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
        ],
        thumbnailImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/398b3bbb-a881-49c3-ae39-26e64d91566d/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/981f84e3-3723-4f38-a750-704e35ac61de/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84b6fc7d-ca9a-473c-8a90-f9796d33f8b5/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/188bf288-9154-4fd2-815f-1cc3110094ad/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0185e762-d9c2-41e5-8014-98f80e5810f7/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fa1ab70c-f4ac-4ff0-b41f-0bcd4620086f/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
        ],
    },

    {
        productId: 3,
        designer: "Nike",
        name: "Nike Air Huarache",
        category: ["men", "women", "lifestyle"],
        description:
            "Built to fit your foot and designed for comfort, the Nike Air Huarache brings back a street-level favorite. Soft leather accents on the upper mix with super-breathable, perfectly shined neoprene-like fabric for easy styling. The low-cut collar and bootie-like construction keep it sleek. Its iconic heel clip and stripped away branding keep the early '90s look you love.",
        inStock: true,
        originalPrice: "100.00",
        discount: "0",
        currentPrice: "100.00",
        productImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03cb72f6-7657-4b57-9036-526b7f0c51d7/air-huarache-mens-shoes-JppwBb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4631beb6-d05a-428c-a116-3505b2e58c37/air-huarache-mens-shoes-JppwBb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6e448c8f-88cc-449a-bc21-50856d7d144c/air-huarache-mens-shoes-JppwBb.png",
        ],
        thumbnailImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03cb72f6-7657-4b57-9036-526b7f0c51d7/air-huarache-mens-shoes-JppwBb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4631beb6-d05a-428c-a116-3505b2e58c37/air-huarache-mens-shoes-JppwBb.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6e448c8f-88cc-449a-bc21-50856d7d144c/air-huarache-mens-shoes-JppwBb.png",
        ],
    },

    {
        productId: 4,
        designer: "Nike",
        name: "Nike ZoomX Invincible Run Flyknit",
        category: ["men", "women", "running"],
        description:
            "Get after those long runs with lightweight, responsive foam that delivers a soft feel with every step. A Flyknit upper gives your foot breathability where you need it most and a secure fit you can depend on. Designed for optimal shock absorption with a wider forefoot for stability and a more curved outsole for easier heel-to-toe transitions. As one of our most tested shoes, lace up and feel the potential when your foot hits the pavement.",
        inStock: false,
        originalPrice: "180.00",
        discount: "0",
        currentPrice: "180.00",
        productImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1afe2391-f81e-429e-bd40-8645e07e0213/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1aa5de5-95da-4458-82c0-3baa12fdfa87/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e45b2627-77c6-4a2c-8bc7-8aa46d8bafe1/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b423108b-8877-4411-8719-4ebd3a15bdf1/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
        ],
        thumbnailImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1afe2391-f81e-429e-bd40-8645e07e0213/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1aa5de5-95da-4458-82c0-3baa12fdfa87/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e45b2627-77c6-4a2c-8bc7-8aa46d8bafe1/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b423108b-8877-4411-8719-4ebd3a15bdf1/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png",
        ],
    },

    {
        productId: 5,
        designer: "Nike",
        name: "Nike Offline 2.0 PRM",
        category: ["men", "women", "sandals-slides"],
        description:
            "Ready to take your game off court and onto the card table, Giannis style? Slip on these comfy mules that are inspired by the Greek Freak’s favorite game-night activity: UNO. Bright primary colors and the game’s logo on the heel make these almost as fun as UNO itself.",
        inStock: true,
        originalPrice: "140.00",
        discount: "0",
        currentPrice: "140.00",
        productImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5dd598b-3838-4862-8a41-279ebf780054/offline-2-prm-mens-mules-66x6WL.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2fca0f0e-dbab-41f6-84f1-71c14c318728/offline-2-prm-mens-mules-66x6WL.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2ba68913-bfa5-4a91-b57a-060a9a246a30/offline-2-prm-mens-mules-66x6WL.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9eab801c-aff4-4b2c-a225-6d20bb9ce19e/offline-2-prm-mens-mules-66x6WL.png",
        ],
        thumbnailImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5dd598b-3838-4862-8a41-279ebf780054/offline-2-prm-mens-mules-66x6WL.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2fca0f0e-dbab-41f6-84f1-71c14c318728/offline-2-prm-mens-mules-66x6WL.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2ba68913-bfa5-4a91-b57a-060a9a246a30/offline-2-prm-mens-mules-66x6WL.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9eab801c-aff4-4b2c-a225-6d20bb9ce19e/offline-2-prm-mens-mules-66x6WL.png",
        ],
    },
    {
        productId: 6,
        designer: "Vans",
        name: "OLD SKOOL",
        category: ["men", "women", "skateboarding"],
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        inStock: true,
        originalPrice: "70.00",
        discount: "0",
        currentPrice: "70.00",
        productImages: [
            "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=700&wid=700&qlt=85",
            "https://images.vans.com/is/image/Vans/VN000D3HY28-ALT1?hei=700&wid=700&qlt=85",
            "https://images.vans.com/is/image/Vans/VN000D3HY28-ALT4?hei=700&wid=700&qlt=85",
        ],
        thumbnailImages: [
            "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=700&wid=700&qlt=85",
            "https://images.vans.com/is/image/Vans/VN000D3HY28-ALT1?hei=700&wid=700&qlt=85",
            "https://images.vans.com/is/image/Vans/VN000D3HY28-ALT4?hei=700&wid=700&qlt=85",
        ],
    },

    {
        productId: 7,
        designer: "Nike",
        name: "Nike ACG Air Deschutz +",
        category: ["men", "women", "sandals-slides"],
        description:
            "From city hikes to canyon trails and long walks on the beach, the Nike ACG Air Deschutz + is built to feel comfortable. It's got a classic '90s look and rugged outdoor-inspired design, with plush padding around the ankle for support. A heavy-duty webbing strap and adjustable hook-and-loop closure keep you focused on the journey ahead.",
        inStock: true,
        originalPrice: "250.00",
        discount: "50",
        currentPrice: "125.00",
        productImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a698f2d9-b0a2-4fff-92ec-a53dfdfa31d4/acg-air-deschutz-sandals-kpgKPr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/81ae7809-e0e7-4db5-8133-0506823592e7/acg-air-deschutz-sandals-kpgKPr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2af7f35e-94c6-4d72-bed4-52317c885a45/acg-air-deschutz-sandals-kpgKPr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ec2ea3fd-ffe2-4d7f-bd58-9807eb824ee1/acg-air-deschutz-sandals-kpgKPr.png",
        ],
        thumbnailImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a698f2d9-b0a2-4fff-92ec-a53dfdfa31d4/acg-air-deschutz-sandals-kpgKPr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/81ae7809-e0e7-4db5-8133-0506823592e7/acg-air-deschutz-sandals-kpgKPr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2af7f35e-94c6-4d72-bed4-52317c885a45/acg-air-deschutz-sandals-kpgKPr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ec2ea3fd-ffe2-4d7f-bd58-9807eb824ee1/acg-air-deschutz-sandals-kpgKPr.png",
        ],
    },
];

export function getProducts() {
    return products;
}

export function getProduct(id) {
    return products.find((product) => product.productId === id);
}
