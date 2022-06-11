import { useEffect, useState, useRef } from "react";

export default function Header(props) {
    const isCartEmpty = useRef(true);
    const [subtotal, setSubtotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        if (props.cart.length === 0) {
            isCartEmpty.current = true;
        } else {
            isCartEmpty.current = false;
        }

        let newSubtotal = 0;
        let newItemCount = 0;
        props.cart.forEach((item) => {
            newSubtotal += item.price * item.quantity;
            newItemCount += item.quantity;
        });
        setSubtotal(newSubtotal);
        setItemCount(newItemCount);
    }, [props.cart]);

    return (
        <div className="header">
            <a href="/">
                <img className="logo" src="/images/logo.svg" alt="sneakers-logo" />
            </a>
            <div className="nav-bar">
                <ul>
                    <li>
                        <a href="/collections">Collections</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="/men">Men</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="/women">Women</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="/about">About</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div className="action-buttons">
                {props.cart.length !== 0 && <div className="cart-notification">{itemCount}</div>}
                <button
                    onClick={() => {
                        if (document.querySelector(".cart-popup").classList.contains("active")) {
                            document.querySelector(".cart-popup").classList.toggle("active");
                        } else {
                            document.querySelector(".cart-popup").classList.add("active");
                        }
                    }}>
                    <img className="cart" src="/images/icon-cart.svg" alt="cart" />
                </button>
                <button>
                    <img className="user" src="/images/bag-on-head.png" alt="user" />
                </button>
            </div>
            <div className="cart-popup">
                <h4>Cart</h4>
                <hr />
                {props.cart.length === 0 && (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                    </div>
                )}
                {props.cart.length !== 0 && (
                    <>
                        <div className="cart">
                            {props.cart.map((product) => {
                                return (
                                    <div className="cart-item" key={product.name}>
                                        <img
                                            className="item-image"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                        <p>
                                            {product.name}
                                            <br />${product.price} x {product.quantity}
                                            <span>
                                                {" "}
                                                &nbsp;=&nbsp; ${product.price * product.quantity}.00
                                            </span>
                                        </p>
                                        <img
                                            className="trashcan"
                                            src="/images/icon-delete.svg"
                                            alt="delete"
                                            onClick={() => props.remove(product.name)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <hr />
                        <div className="cart-subtotal">
                            <h4>
                                Subtotal&nbsp;&nbsp;
                                <span>
                                    &#40;{itemCount}&nbsp;
                                    {itemCount > 1 ? "items" : "item"}&#41;
                                </span>{" "}
                            </h4>
                            <h4 className="cart-subtotal-amount">${subtotal.toFixed(2)}</h4>
                        </div>
                        <button className="cart-checkout">Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
}
