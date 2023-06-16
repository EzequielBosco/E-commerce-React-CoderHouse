import { NavLink, useLocation } from "react-router-dom"
import "../category.css"

const Category = ({category}) => {
    const image = require(`../../../../../assets/${category}.png`)

    const location = useLocation();

    const isActive = location.pathname === `/productList/${category}`;

    return (
        <div className={`${isActive ? "active" : ""}`}>
            <NavLink className="div-categories" to={`/productList/${category}`}>
                <img src={image} width="50px"></img>
                <h3 className="category-item">{category}</h3>
            </NavLink>
        </div>
    )
}

export { Category }