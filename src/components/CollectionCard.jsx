export default function CollectionCard(props) {
    return (
        <div>
            <img src={props.image} alt={props.name} />
            <div className="collection-text">
                <h1>{props.name}</h1>
                <a href="/collections">Shop now</a>
            </div>
        </div>
    );
}
