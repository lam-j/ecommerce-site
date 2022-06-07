import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Collections from "./routes/Collections.jsx";
import Men from "./routes/Men.jsx";
import Women from "./routes/Women.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Product from "./routes/Product.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="collections" element={<Collections />} />
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path=":productId" element={<Product />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
