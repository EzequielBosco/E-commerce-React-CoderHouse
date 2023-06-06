import { Button } from "../../../button"
import "./product.css"
import { Link } from "react-router-dom"

const Product = ({id, name, image, category, price, status}) => {
    return (
        <div className="product">
            <h3 className={name}>{name}</h3>
            <div>Imagen: {image} </div>
            <p>Precio: {price}</p>
            <span>Categoría: {category}</span>
            <Link to={`/catalogue/${id}`}><Button className="btn-product" type="submit">Ver más</Button></Link>
        </div>
    )
}

export { Product }