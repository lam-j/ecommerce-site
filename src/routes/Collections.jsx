import { getCollections } from "../data/collections.js";
import CollectionCard from "../components/CollectionCard.jsx";

export default function Collections() {
    const collections = getCollections();
    function showContent(e) {
        const menu = e.target.parentNode.parentNode;
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        } else {
            menu.classList.add("active");
        }
    }

    return (
        <div className="collections-page">
            <div className="gallery-and-filter-wrapper">
                <div className="nav-collection">
                    <p>Men</p>
                    <p>Women</p>
                    <p>Active</p>
                    <p>Everyday</p>
                    <p>Beach</p>
                    <div className="dropdown">
                        <div className="dropdown-button" onClick={showContent}>
                            <p>
                                Seasonal <span>+</span>
                            </p>
                        </div>
                        <div className="dropdown-content">
                            <p>Spring</p>
                            <p>Summer</p>
                            <p>Fall</p>
                            <p>Winter</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-button" onClick={showContent}>
                            <p>
                                Brands <span>+</span>
                            </p>
                        </div>
                        <div className="dropdown-content">
                            <p>sneakers ™</p>
                            <p>Nike</p>
                            <p>Vans</p>
                        </div>
                    </div>
                </div>
                <div className="collections">
                    {collections.map((collection) => {
                        return (
                            <CollectionCard
                                name={collection.name}
                                image={collection.image}
                                id={collection.collectionId}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
