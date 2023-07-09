import { useContext } from 'react'
import cartImage from '../../../assets/carrito-de-compras.png'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../context/contextCart'

const CartWidget = () => {

    const { cart, add } = useContext(CartContext)

    return (
        <div className='d-flex'>
            <NavLink to="/cart"><img src={cartImage} height="18px" /></NavLink>              
            {cart.length > 0 ? cart.reduce((sum, product) => sum + product.quantity, 0) : ""}
        </div>
    )
}

export { CartWidget }