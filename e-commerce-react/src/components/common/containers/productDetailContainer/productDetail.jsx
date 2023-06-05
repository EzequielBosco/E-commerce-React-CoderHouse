import "../../data/products"

function ProductView({product}) {
    return(
        <div className="productView">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.image + "image"} />
            <span>{product.category}</span>
            <p>{product.description}</p>
            <small>{product.year}</small>
        </div>
    )
}

export default ProductView