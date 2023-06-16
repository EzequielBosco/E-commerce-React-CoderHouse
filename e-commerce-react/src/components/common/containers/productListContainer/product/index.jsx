import { Button } from "../../../button"
import "./product.css"
import { Link } from "react-router-dom"

const Product = ({id, name, category, price, status}) => {
    return (
    <div class="card-product">
        <div class="img">
        </div>
        <div className="d-flex flex-column mt-2">
            <h3 className={name}>{name}</h3>
            <span>Categoría: {category}</span>
            <Link to={`/productList/${category}/${id}`}><Button className="btn-product" type="submit">Ver más</Button></Link>
        </div>
    </div>
    )
}

export { Product }