import { useEffect } from "react";
import GalleryItem from "../components/GalleryItem";

export default function Gallery(props) {
    const newURL = props.url.slice(0, props.url.lastIndexOf("/"));
    const currentCategory = props.categoryParams[props.categoryParams.length - 1];

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
        if (props.isSubcategoryPage) {
            return (
                <div className="filter">
                    <a
                        className={props.categoryParams[0] + " active filter-category"}
                        href={newURL}>
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
                    <a
                        className={props.categoryParams[0] + " active filter-category"}
                        href={props.url}>
                        All Shoes
                    </a>
                    <a className="lifestyle filter-category" href={props.url + "/lifestyle"}>
                        Lifestyle
                    </a>
                    <a className="running filter-category" href={props.url + "/running"}>
                        Running
                    </a>
                    <a
                        className="skateboarding filter-category"
                        href={props.url + "/skateboarding"}>
                        Skateboarding
                    </a>
                    <a
                        className="sandals-slides filter-category"
                        href={props.url + "/sandals-slides"}>
                        Sandals & Slides
                    </a>
                </div>
            );
        }
    }
    return (
        <div className="gallery-and-filter-wrapper">
            {createFilter()}
            <div className="gallery">
                {props.products.map((product) => {
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
    );
}
