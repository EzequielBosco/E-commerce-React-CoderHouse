import "./productListPage.css"
import { CategoryList, ProductList } from "../../components/common/index"

const ProductListPage = () => {

    return (
        <div>
            <main id="main-categories">
                <div id="category-list">
                    <CategoryList/>
                </div>
            </main>
            <section>
                <h2 className="m-3">Todos los productos</h2>
                <ProductList />
                <br/>
            </section>
        </div>
    )
}

export { ProductListPage }