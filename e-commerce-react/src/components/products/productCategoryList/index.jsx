import { getCategories } from "../../../services/firebase/categories";
import { Product } from "../../products/product"
import { useEffect, useState } from "react";

const ProductCategoryList = ({ category }) => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getCategories(category).then((productsFilter) => setProductList(productsFilter));
    }, [category])

    const CardProducts = productList.map((p) => {
        return(<Product key={p.id} id={p.id} name={p.name} image={p.image} category={p.category} price={p.price} description={p.description}
        stock={p.stock} />)
    })

    return( 
        <div id="list-products">
            {CardProducts}
        </div>
    )
}

export { ProductCategoryList }