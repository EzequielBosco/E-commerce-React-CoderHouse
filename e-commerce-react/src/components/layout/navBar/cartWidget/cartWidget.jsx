import { useEffect, useState } from 'react'
import cartImage from '../../../../assets/carrito-de-compras.png'

const CartWidget = () => {

    const [contador, setContador] = useState(0)

    const incremento = () => {
        setContador(prev => prev + 1)
    }

    useEffect( () => {
        console.log("aumenta")
    }, [contador])

    return (
        <div>
            <a href="index.html"><img src={cartImage} height="20px" /></a>                
            <span>({contador})</span>
            <button onClick={incremento}>Incrementar</button>
        </div>
    )
}

export { CartWidget }