import { NavLink } from "react-router-dom"

const Categories = () => {
    return (
        <ul className="d-flex align-items-center justify-content-evenly">
            <li className="underline products-title"><NavLink to="/productList/all">Nuestros productos</NavLink></li>
        </ul>
    )
} 

export { Categories }