import { useEffect, useState } from "react"
import { ProductList } from "../productList"
import { getProducts } from "../../../services/firebase/products"

const ProductListContainer = () => {

    const [products, setProducts] = useState()

    useEffect(() => {
        getProducts().then((data => {
            setProducts(data)
        }))
    }, [])

    return( 
        <div id="list-products">
            { products && <ProductList products={products} />}
        </div>
    )
}

export { ProductListContainer }