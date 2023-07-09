import "./categoryDetail.css"
import { useEffect, useState } from "react"
import { CategoryListContainer } from "../../categories/categoryListContainer"
import { Loader } from "../../../common"
import { ProductCategoryList } from "../../products/productCategoryList"
import { getCategories } from "../../../services/firebase/categories"
import { useParams } from "react-router-dom"
import { ProductListContainer } from "../../products/productListContainer"

const CategoryDetailContainer = () => {
 
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        if(category) {
            getCategories(category).then((product) => {
                setProducts(product)
            })
        }
    }, [category])

    return ( 
        <div>
            <main id="main-categories">
                <div id="category-list">
                    <CategoryListContainer/>
                </div>
            </main>
            {category && products.length > 0 ? (
            <>
                <h1 className="text-center m-4 p-2">{category}</h1>
                <div id="category-detail">
                    <Loader />
                    <ProductCategoryList category={category} />
                </div>
            </>
            ) : (
            <section>
                <h2 className="m-3">Todos los productos</h2>
                <Loader />
                <ProductListContainer />
                <br/>
            </section>
            )}
        </div>
    )
}

export { CategoryDetailContainer }