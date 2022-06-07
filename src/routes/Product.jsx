import { useParams } from "react-router-dom";
import { getProduct } from "../data/products.js";

export default function Product() {
    let productId = useParams().productId;
    let product = getProduct(parseInt(productId, 10));

    console.log(product);

    return (
        <div className="product-page">
            <div className="product-images">
                <div className="full-images">
                    {product.productImages.map((image) => {
                        return <img src={image} alt="wee" />;
                    })}
                </div>
                <div className="thumbnails">
                    {product.thumbnailImages.map((image) => {
                        return <img src={image} alt="wee" />;
                    })}
                </div>
            </div>
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
                        <img src="./images/icon-minus.svg" alt="minus" />
                        <h4>0</h4>
                        <img src="./images/icon-plus.svg" alt="plus" />
                    </div>
                    <button>
                        <img src="./images/icon-cart-white.svg" alt="checkout-cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
