import { createContext, useState } from "react";

const CartContext = createContext() 

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addProduct = (product, quantity) => {
        if (quantity === 0 ) {
            return
        }
        
        if (cart.find(p => p.id === product.id)) {
            if (product.stock < quantity) {
                return
            }
            const newCart = cart.map((p) =>
                p.id === product.id ? {...p, quantity: p.quantity + quantity, stock: p.stock - quantity } : p

            )
            setCart(newCart)
            
        } else {
            setCart([...cart, { ...product, quantity, stock: product.stock - quantity }])

        }
    }

    const removeProduct = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId)
        setCart(updatedCart)
    }

    const increase = (productId) => {
        const updatedCart = cart.map((product) => {
          if (product.id === productId && product.stock > 0) {
            return { ...product, quantity: product.quantity + 1, stock: product.stock - 1 }
          }
          return product
        })
    
        setCart(updatedCart)
    }

    
    const decrease = (productId) => {
        const updatedCart = cart.map((product) => {
          if (product.id === productId && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1, stock: product.stock + 1 }
          }
          return product
        })
    
        setCart(updatedCart)
    }

    const purchaseCart = () => {
        setCart([])
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
    }

    const contextValue = {
        cart,
        setCart,
        addProduct,
        removeProduct,
        clearCart,
        totalPrice,
        increase,
        decrease,
        purchaseCart
    }

    return (
        <CartContext.Provider value={ contextValue }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }