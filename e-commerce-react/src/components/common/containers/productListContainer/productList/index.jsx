import { Product } from "../product"
import { useEffect, useState } from "react";
import { getProducts } from "../../../../../services/products";

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((response) => setProducts(response));
    }, [])

    const CardProducts = products.map((p) => {
        return(<Product id={p.id} name={p.name} image={p.image.front} category={p.category} price={p.price} description={p.description}
        stock={p.stock} />)
    })

    return( 
        <div id="list-products">
            {CardProducts}
        </div>
    )
}

export { ProductList }