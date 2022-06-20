import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./routes/LandingPage.jsx";
import Collections from "./routes/Collections.jsx";
import About from "./routes/About.jsx";
import Product from "./routes/Product.jsx";
import GalleryPage from "./routes/GalleryPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="collections" element={<Collections />} />
                    <Route path="men" element={<GalleryPage />} />
                    <Route path="women" element={<GalleryPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="product/:productId" element={<Product />}></Route>
                    <Route path="men/:category" element={<GalleryPage />} />
                    <Route path="women/:category" element={<GalleryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
