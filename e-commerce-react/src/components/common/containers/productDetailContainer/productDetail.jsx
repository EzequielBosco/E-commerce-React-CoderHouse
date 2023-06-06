import products from "../../data/products.js"
import { useParams } from "react-router-dom"

function ProductDetail() {
    const params = useParams()
    let productId = Number(params.id)

    const product = products.find((product) => product.id === productId)

    if (!product) {
        return <div>No se encontró el producto</div>;
    }

    return(
        <div className="productView">
            <h2>{product.name}</h2>
            <img src={product.image.front} alt={product.image + "image"} />
            <span>{product.category}</span>
            <p>{product.description}</p>
            <p>{product.stock}</p>
            <small>{product.price}</small>
        </div>
    )
}

export { ProductDetail }