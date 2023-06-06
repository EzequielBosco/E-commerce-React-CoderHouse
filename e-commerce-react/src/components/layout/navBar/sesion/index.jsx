import "./sesion.css"
import { NavLink } from "react-router-dom"

const Sesion = () => {
    return (
        <ul className="sesion d-flex align-items-center">
            <NavLink to="/login"><li>Iniciar sesión</li></NavLink>
            <NavLink to="/signup"><li>Registrarme</li></NavLink>
        </ul>
    )
} 

export { Sesion }