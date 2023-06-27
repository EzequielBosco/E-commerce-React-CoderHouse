import { useParams } from "react-router-dom"
import "./productDetail.css"
import { Button } from "../../common/button"
import { useEffect } from "react"
import { useState } from "react"
import { getProduct } from "../../../services/products"

function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        getProduct(id).then((product) => {
            setProduct(product)
        })
    }, [id])

    const [contador, setContador] = useState(0)

    const incremento = () => {
        setContador(prev => prev + 1)
    }

    const decremento = () => {
        setContador(prev => prev - 1)
    }

    useEffect( () => {
        console.log("aumenta")
    }, [contador])

    if (!product) {
        return(
            <div className="text-center">
                <h1>No se encontró el producto</h1>
            </div>
        )
    }

    const image = require(`../../../assets/${product.image.front}`)

    return(
        <div className="container">
            <div className="container mt-2">
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
                    <h5 id="price">Precio: {product.price}</h5>
                    <p>Unidades: {product.stock}</p>
                    <small>{product.description}</small>
                    <br></br>
                    <div className="d-flex align-items-center gap-3">
                        <Button onClick={decremento} className="btn-product">+</Button>
                        <h5>({contador})</h5>
                        <Button onClick={incremento} className="btn-product">+</Button>
                        <Button className="button-color">
                            Agregar al carrito
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductDetail }