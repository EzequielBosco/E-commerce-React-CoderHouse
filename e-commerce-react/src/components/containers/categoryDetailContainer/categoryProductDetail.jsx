import products from "../../../data/products.js"
import "./categoryDetail.css"
import { useParams } from "react-router-dom"
import { ProductCategoryList } from "../productListContainer/productCategoryList/index.jsx"
import { CategoryList, ProductList } from "../../containers"

function CategoryDetail() {
    const params = useParams()
    let categoryId = params.category

    let product
    if (categoryId) {
        product = products.find((product) => product.category === categoryId);
    }

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
                    <ProductCategoryList category={product.category} />
                </div>
            </>
            ) : (
            <section>
                <h2 className="m-3">Todos los productos</h2>
                <ProductList />
                <br/>
            </section>
            )}
        </div>
    )
}

export { CategoryDetail }