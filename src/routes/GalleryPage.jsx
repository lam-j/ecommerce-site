import { getProducts } from "../data/products.js";
import GalleryItem from "../components/GalleryItem.jsx";
import { useEffect } from "react";

export default function GalleryPage() {
    const url = window.location.href;
    /* rather than showing every shoe that matches at least one criterium, 
    the shoe has to match all criteria */
    const categoryParams = window.location.pathname.split("/").splice(1);
    const products = getProducts().filter((product) => {
        return categoryParams.every((param) => {
            return product.category.includes(param);
        });
    });
    const newURL = url.slice(0, url.lastIndexOf("/"));
    const currentCategory = categoryParams[categoryParams.length - 1];

    useEffect(() => {
        const categories = document.querySelectorAll(".filter-category");

        categories.forEach((category) => {
            if (category.classList.contains("active")) {
                category.classList.toggle("active");
            } else {
                category.classList.remove("active");
            }
        });

        document.querySelector("." + currentCategory).classList.add("active");
    });

    function createFilter() {
        if (categoryParams.length > 1) {
            return (
                <div className="filter">
                    <a className={categoryParams[0] + " active filter-category"} href={newURL}>
                        All Shoes
                    </a>
                    <a className="lifestyle filter-category" href={newURL + "/lifestyle"}>
                        Lifestyle
                    </a>
                    <a className="running filter-category" href={newURL + "/running"}>
                        Running
                    </a>
                    <a className="skateboarding filter-category" href={newURL + "/skateboarding"}>
                        Skateboarding
                    </a>
                    <a className="sandals-slides filter-category" href={newURL + "/sandals-slides"}>
                        Sandals & Slides
                    </a>
                </div>
            );
        } else {
            return (
                <div className="filter">
                    <a className={categoryParams[0] + " active filter-category"} href={url}>
                        All Shoes
                    </a>
                    <a className="lifestyle filter-category" href={url + "/lifestyle"}>
                        Lifestyle
                    </a>
                    <a className="running filter-category" href={url + "/running"}>
                        Running
                    </a>
                    <a className="skateboarding filter-category" href={url + "/skateboarding"}>
                        Skateboarding
                    </a>
                    <a className="sandals-slides filter-category" href={url + "/sandals-slides"}>
                        Sandals & Slides
                    </a>
                </div>
            );
        }
    }

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <h2>
                    {categoryParams[0].charAt(0).toUpperCase() + categoryParams[0].substring(1)}'s
                    Shoes & Sneakers ({products.length})
                </h2>
            </div>
            <div className="gallery-and-filter-wrapper">
                {createFilter()}
                <div className="gallery">
                    {products.map((product) => {
                        return (
                            <GalleryItem
                                key={product.name + product.productId}
                                id={product.productId}
                                name={product.name}
                                designer={product.designer}
                                price={product.currentPrice}
                                image={product.productImages[0]}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="page-nav"></div>
        </div>
    );
}
