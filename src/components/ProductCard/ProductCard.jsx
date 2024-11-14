import "./index.css"

export function ProductCard(props) {
    const { img, category, name, price } = props.data;

    return (
        <div className="product-card">
            <img src={img} alt={name} />
            <div className="category">{category}</div>
            <h4>{name}</h4>
            <div className="price">{price}</div>
        </div>
    );
}
