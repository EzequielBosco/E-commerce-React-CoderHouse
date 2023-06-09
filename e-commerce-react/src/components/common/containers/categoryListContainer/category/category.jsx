import { Button } from "../../../button"
import { Link } from "react-router-dom"

const Category = ({category}) => {
    return (
        <div className="category">
            <h2>{category}</h2>
            <Link to={`/category/${category}`}><Button id="button-color" type="submit">Ver categoría</Button></Link>
        </div>
    )
}

export { Category }