import products from "../../../../data/products.js"
import { useParams } from "react-router-dom"
import { ProductCategoryList } from "../productListContainer/productCategoryList/index.jsx"
import { CategoryList } from "../categoryListContainer/categoryList/categoryList.jsx"

function CategoryDetail() {
    const params = useParams()
    let categoryId = params.category

    const product = products.find((product) => product.category === categoryId)

    if (!product) {
        return <div>No se encontró la categoría</div>;
    }

    return(
        <div>
            <main id="main-categories">
                <div id="category-list">
                    <CategoryList/>
                </div>
            </main>
            <h1 className="text-center m-4 p-2">{product.category}</h1>
            <div id="category-detail">
                <ProductCategoryList category={product.category} />
            </div>
        </div>
    )
}

export { CategoryDetail }