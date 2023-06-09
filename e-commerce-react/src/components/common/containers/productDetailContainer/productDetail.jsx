import products from "../../data/products"
import { useParams } from "react-router-dom"
import "./productDetail.css"

function ProductDetail() {
    const params = useParams()
    let productId = Number(params.id)

    const product = products.find((product) => product.id === productId)

    if (!product) {
        return(
            <div className="text-center">
                <h1>No se encontró el producto</h1>
            </div>
        )
    }

    const image = require(`../../../../assets/${product.image.front}`)

    return(
        <div className="productDetail">
            <div className="img">
                <img src={image} height="300px" alt={product.name + "-image-front"} />
            </div>
            <div className="info">
                <h2>{product.name}</h2>
                <span>Categoría: {product.category}</span>
                <p>Stock: {product.stock}</p>
                <small>Precio: {product.price}</small>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export { ProductDetail }