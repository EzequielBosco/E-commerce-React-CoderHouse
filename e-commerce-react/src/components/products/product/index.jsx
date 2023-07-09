import { useContext } from "react"
import { Button } from "../../../common/button"
import "./product.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/contextCart"
// import { AuthContext } from "../../../../context"
// import { useContext } from "react"

const Product = ({id, name, category, price, stock, image, description, textButton}) => {

    // const {data, setData, me, isAuthenticated} = useContext(AuthContext)

    return (
        <div class="card-product">
            {/* {JSON.stringify(data)} */}
            {/* <button onClick={() => setData("cambio")}>Cambiar data</button> */}
            <div class="img">
                <img src={image} width="140px"></img>
            </div>
            <div className="info mt-2">
                <h3 className={name}>{name}</h3>
                <span>Categoría: {category}</span>
                <span>Precio: ${price} </span>
                <Link to={`/productList/${category}/${id}`}><Button className="btn-product" type="submit">{textButton}</Button></Link>
            </div>
        </div>
    )
}

export { Product }