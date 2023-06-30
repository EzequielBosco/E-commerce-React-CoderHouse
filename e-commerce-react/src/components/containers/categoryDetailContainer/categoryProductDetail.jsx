import products from "../../../data/products.js"
import "./categoryProductDetail.css"
import { useParams } from "react-router-dom"
import { ProductCategoryList } from "../productListContainer/productCategoryList/index.jsx"
import { CategoryList, ProductList } from "../../containers"
import { Loader } from "../../common"
import { memo, useEffect, useState } from "react"

const CategoryDetail = memo(() => {
    const params = useParams()
    let categoryId = params.category
    const [product, setProduct] = useState();

    useEffect(() => {
        if (categoryId) {
            const foundProduct = products.find(
                (product) => product.category === categoryId)
            setProduct(foundProduct)
        }
    }, [categoryId])

    return(
        <div>
            <main id="main-categories">
                <div id="category-list">
                    <CategoryList/>
                </div>
            </main>
            {categoryId && product ? (
            <>
                <h1 className="text-center m-4 p-2">{product.category}</h1>
                <div id="category-detail">
                    <Loader />
                    <ProductCategoryList category={product.category} />
                </div>
            </>
            ) : (
            <section>
                <h2 className="m-3">Todos los productos</h2>
                <Loader />
                <ProductList />
                <br/>
            </section>
            )}
        </div>
    )
})

export { CategoryDetail }