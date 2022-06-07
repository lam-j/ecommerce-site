import React, { useEffect, useState, useRef } from "react";

export default function Header(props) {
    return (
        <div className="header">
            <a href="/">
                <img className="logo" src="./images/logo.svg" alt="sneakers-logo" />
            </a>
            <div className="navigation">
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
                <button
                    onClick={() => {
                        if (document.querySelector(".cart-popup").classList.contains("active")) {
                            document.querySelector(".cart-popup").classList.toggle("active");
                        } else {
                            document.querySelector(".cart-popup").classList.add("active");
                        }
                    }}>
                    <img className="cart" src="./images/icon-cart.svg" alt="cart" />
                </button>
                <button>
                    <img className="user" src="./images/bag-on-head.png" alt="user" />
                </button>
            </div>
            <div className="cart-popup">
                <h4>Cart</h4>
                <hr />
            </div>
        </div>
    );
}
