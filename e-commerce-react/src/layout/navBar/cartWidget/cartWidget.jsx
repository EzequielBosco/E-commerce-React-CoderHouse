import { useEffect, useState } from 'react'
import cartImage from '../../../assets/carrito-de-compras.png'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {

    // const [contador, setContador] = useState(0)

    // const incremento = () => {
    //     setContador(prev => prev + 1)
    // }

    // useEffect( () => {
    //     console.log("aumenta")
    // }, [contador])

    return (
        <div className='d-flex'>
            <NavLink to="/"><img src={cartImage} height="18px" /></NavLink>              
            {/* <span>({contador})</span>
            <button onClick={incremento}>Incrementar</button> */}
        </div>
    )
}

export { CartWidget }