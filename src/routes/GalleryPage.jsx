import { getProducts } from "../data/products.js";
import Gallery from "../components/Gallery.jsx";

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

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <h2>
                    {categoryParams[0].charAt(0).toUpperCase() + categoryParams[0].substring(1)}'s
                    Shoes & Sneakers ({products.length})
                </h2>
            </div>
            <Gallery
                products={products}
                url={url}
                categoryParams={categoryParams}
                isSubcategoryPage={categoryParams.length > 1}
            />
            <div className="page-nav"></div>
        </div>
    );
}
