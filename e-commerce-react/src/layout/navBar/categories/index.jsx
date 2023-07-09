import { NavLink } from "react-router-dom"

const Categories = () => {
    return (
        <ul className="d-flex align-items-center justify-content-evenly">
            <li className="underline"><NavLink to="/productList/all">Nuestros productos</NavLink></li>
            <li className="underline"><NavLink to="/login">Iniciar sesión</NavLink></li>
            <li className="underline"><NavLink to="/signup">Registro</NavLink></li>
        </ul>
    )
} 

export { Categories }