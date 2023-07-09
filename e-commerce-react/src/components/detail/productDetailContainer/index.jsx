import { useParams } from "react-router-dom"
import "./productDetail.css"
import { Button } from "../../../common/button"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { getProduct } from "../../../services/firebase/products"
import { CartContext } from "../../../context/contextCart"

function ProductDetailContainer() {

    const { id } = useParams()

    const [product, setProduct] = useState()

    const { cart, addProduct } = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        getProduct(id).then((product) => {
            setProduct(product)
        })
    }, [id])


    const increase = () => {
        const productStock = cart.find((p) => p.id === product.id)
        if (productStock && productStock.stock < quantity + 1) {
            return
        }
        if (quantity < product.stock) {
            setQuantity(prev => prev + 1)
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const reset = () => {
        setQuantity(0)
    }

    if (!product) {
        return setTimeout(() => {
            <div className="text-center">
                <h1>No se encontró el producto</h1>
            </div>
        }, 2000);
    }

    return(
        <div className="container">
            <div className="container mt-2">
                <h2>{product.name}</h2>
                <hr></hr>
            </div>
            <div className="productDetail">
                <div className="img">
                    <img src={product.image} height="300px" alt={product.name + "-image-front"} />
                </div>
                <div className="info">
                    <h2 className="title-detail">{product.name}</h2>
                    <h3>Categoría: {product.category}</h3>
                    <h5 id="price">Precio: ${product.price}</h5>
                    {cart.length > 0 && product.stock > 1 ? 
                    <>{cart.map((p) => (
                    <p>Stock disponible: <strong>{p.stock}</strong></p>))
                    }</> : <p>Stock disponible: <strong>{product.stock}</strong></p>}
                    <small>{product.description}</small>
                    <br></br>
                    <div className="d-flex gap-3">
                        <div className="d-flex align-items-center gap-3 buttons">
                            <Button onClick={decrease} className="btn-quantity">-</Button>
                            <h5>({quantity})</h5>
                            <Button onClick={increase} className="btn-quantity">+</Button>
                        </div>
                        <Button onClick={() => {addProduct(product, quantity); reset()}} className="button-color">
                            Agregar al carrito
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductDetailContainer }