import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Check if there are previously stored cart items
        if (JSON.parse(localStorage.getItem("cart")) !== null) {
            if (JSON.parse(localStorage.getItem("cart")).length > 0) {
                setCart(JSON.parse(localStorage.getItem("cart")));
            }
        } else {
            // if this is the first visit, create local storage
            localStorage.setItem("cart", []);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(name, price, quantity, image) {
        const isAlreadyInCart = cart.some((item) => item.name === name);

        if (isAlreadyInCart) {
            const updatedCart = cart.map((item) => {
                if (name === item.name) {
                    let newQuantity = item.quantity + quantity;
                    if (newQuantity > 10) {
                        newQuantity = 10;
                    }
                    const updatedItem = {
                        ...item,
                        quantity: newQuantity,
                    };
                    return updatedItem;
                }
                return updatedCart;
            });
            setCart(updatedCart);
        } else {
            const newItem = {
                name: name,
                price: price,
                quantity: quantity,
                image: image,
            };
            setCart((prev) => {
                return [...prev, newItem];
            });
        }
    }

    function removeFromCart(name) {
        setCart((prev) => {
            return prev.filter((item) => {
                return item.name !== name;
            });
        });
    }

    return (
        <div className="App">
            <Header cart={cart} remove={removeFromCart} />
            <hr />
            <Outlet context={addToCart} />
        </div>
    );
}

export default App;
