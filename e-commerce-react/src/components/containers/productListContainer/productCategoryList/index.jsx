import { getCategories } from "../../../../services/categories";
import { Product } from "../product"
import { useEffect, useState } from "react";

const ProductCategoryList = ({ category }) => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getCategories(category).then((productsFilter) => setProductList(productsFilter));
    }, [category])

    const CardProducts = productList.map((p) => {
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