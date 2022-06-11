export default function GalleryItem(props) {
    return (
        <a href={"/product/" + props.id}>
            <div className="gallery-item">
                <img src={props.image} alt={props.name} />
                <div className="gallery-item-details">
                    <p className="designer">{props.designer}</p>
                    <p>{props.name}</p>
                    <p className="price">${props.price.substring(0, props.price.indexOf("."))}</p>
                </div>
            </div>
        </a>
    );
}
