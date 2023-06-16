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
        <div className="container">
            <div className="container">
                <h2>{product.name}</h2>
                <hr></hr>
            </div>
            <div className="productDetail">
                <div className="img">
                    <img src={image} height="300px" alt={product.name + "-image-front"} />
                </div>
                <div className="info">
                    <h2 className="title-detail">{product.name}</h2>
                    <h3>Categoría: {product.category}</h3>
                    <h5>Precio: {product.price}</h5>
                    <p>Unidades: {product.stock}</p>
                    <small>{product.description}</small>
                </div>
            </div>
        </div>
    )
}

export { ProductDetail }