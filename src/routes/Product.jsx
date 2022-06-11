import { useParams, useOutletContext } from "react-router-dom";
import { getProduct } from "../data/products.js";
import { useState } from "react";
import Images from "../components/ProductImages.jsx";
import Lightbox from "../components/Lightbox.jsx";

export default function Product(props) {
    let productId = useParams().productId;
    let product = getProduct(parseInt(productId, 10));
    const add = useOutletContext();

    const [isLightboxActive, setIsLightboxActive] = useState(false);
    const [quantity, setQuantity] = useState(0);

    function toggleLightbox() {
        setIsLightboxActive((prev) => !prev);
    }

    return (
        <div className="product-page">
            <Images
                product={product}
                isLightboxActive={isLightboxActive}
                toggleLightbox={toggleLightbox}
            />
            {isLightboxActive && <Lightbox product={product} toggleLightbox={toggleLightbox} />}
            <div className="product-details">
                <p className="designer">{product.designer}</p>
                <h1 className="name">{product.name} </h1>
                <p className="description">{product.description}</p>
                <div className="pricing">
                    <h3 className="current-price">${product.currentPrice}</h3>
                    <div className="discount">
                        <p>{product.discount}%</p>
                    </div>
                    <p className="original-price">${product.originalPrice}</p>
                </div>
                <div className="add-to-cart">
                    <div className="quantity">
                        <img
                            src="/images/icon-minus.svg"
                            alt="minus"
                            onClick={() =>
                                setQuantity((prev) => {
                                    if (prev === 0) {
                                        return prev;
                                    } else {
                                        return prev - 1;
                                    }
                                })
                            }
                        />
                        <h4>{quantity}</h4>
                        <img
                            src="/images/icon-plus.svg"
                            alt="plus"
                            onClick={() =>
                                setQuantity((prev) => {
                                    if (prev === 10) {
                                        return prev;
                                    } else {
                                        return prev + 1;
                                    }
                                })
                            }
                        />
                    </div>
                    <button
                        onClick={() =>
                            add(
                                product.name,
                                product.currentPrice,
                                quantity,
                                product.thumbnailImages[0]
                            )
                        }>
                        <img src="/images/icon-cart-white.svg" alt="checkout-cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
