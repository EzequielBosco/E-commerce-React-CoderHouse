import { NavLink } from "react-router-dom"

const Categories = () => {
    return (
        <ul className="d-flex align-items-center justify-content-evenly">
            <li><NavLink to="/category">Nuestros productos</NavLink></li>
            <li><NavLink to="/login">Iniciar sesión</NavLink></li>
            <li><NavLink to="/signup">Registro</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
    )
} 

export { Categories }