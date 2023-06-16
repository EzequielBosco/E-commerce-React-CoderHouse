import { Product } from "../product"
import products from "../../../../../data/products"
import { useEffect, useState } from "react";

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 800)
    })
}

const ProductCategoryList = ({ category }) => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProducts().then((response) => setProductList(response));
    }, [])

    let productFilter = productList.filter((product) => product.category === category)

    const CardProducts = productFilter.map((p) => {
        return(<Product id={p.id} name={p.name} image={p.image.front} category={p.category} price={p.price} description={p.description}
        stock={p.stock} />)
    })

    return( 
        <div id="list-products">
            {CardProducts}
        </div>
    )
}

export { ProductCategoryList }