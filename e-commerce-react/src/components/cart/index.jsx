import { useContext } from "react"
import { CartContext } from "../../context/contextCart"
import { Button } from "../../common"
import { Link } from "react-router-dom"
import "./cart.css"
import { AddOrder } from "../order"
import { createOrder } from "../../services/firebase/orders"

const Cart = () => {

    const { cart, setCart, totalPrice, removeProduct, increase, decrease, clearCart, purchaseCart } = useContext(CartContext)
    
    const getProductData = (product) => {
        return {
            id: product.id,
            name: product.name,
            quantity: product.quantity,
            price: product.price,
            description: product.description
        }
    }

    const getOrderData = () => {
        const productsData = cart.map(getProductData)

        return {
            name: "", 
            lastname: "",
            email: "", 
            email1: "",
            phone: "", 
            products: productsData
        }
    }

    const submitOrder = () => {
        const orderData = getOrderData()
        createOrder(orderData)
        purchaseCart()
    }

    return(
        <div className="container container-page">
            
            <h1 className="title-cart text-center m-2">Carrito</h1>
            <hr></hr>
            
            {cart.length > 0 ?
            <>
                <div className="cart-container">
                    {cart.map((p) => (
                        <div key={p.id} className="cart">
                            <h2>{p.name}</h2>
                            <p>Precio unitario: $<strong>{p.price}</strong></p>
                            <p>Stock disponible: <strong>{p.stock}</strong></p>
                            <p>Precio total: $<strong>{p.price * p.quantity}</strong></p>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                            <p>Unidades:</p>
                            <div className="d-flex gap-2">
                            <Button onClick={() => decrease(p.id)} className="btn-quantity-w">-</Button>
                            <h5>({p.quantity})</h5>
                            <Button onClick={() => increase(p.id)} className="btn-quantity-w">+</Button>
                            </div>
                            </div>
                            <Button onClick={() => removeProduct(p.id)} className="btn-delete white-box">                            
                                <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                                </svg>
                            </Button>
                        </div>
                    ))}
                </div>
                <h3 className="m-4">Precio total: $<strong>{totalPrice()}</strong></h3>
                <AddOrder onSubmit={submitOrder}/>

                <div className="d-flex gap-3 justify-content-around align-items-center">
                    <Link to="/productList/all">
                        <Button className="button-color">
                            Seguir comprando
                        </Button>
                    </Link>
                    
                    <Button onClick={() => clearCart()} className="btn-delete ">                   
                        <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                        </svg>
                        <h4>Vaciar carrito </h4> 
                    </Button>
                </div>
            </>
            : 
            <div className="d-flex flex-column align-items-center">
                <h3 className="text-center mt-4 p-4">El carrito se encuentra vacío</h3>
                <Link to={"/ProductList/all"} ><Button className="text-center m-2 button-color">Volver al catálogo</Button></Link>
            </div>}
        </div>
    )
}

export { Cart }