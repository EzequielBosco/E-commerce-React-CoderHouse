import "./category.css"
import { CategoryList, ProductList } from "../../components/common/index"

const Category = () => {

    return (
        <div>
            <main id="main-catalogue">
                <h1 className="container text-center mt-2 p-3">Categorías</h1>
            </main>
            <section>
                <div id="category-list">
                    <CategoryList/>
                </div>
            </section>
            <div className="separador"></div>
            <section id="section-category">
                <h2 className="m-3">Todos los productos</h2>
                <ProductList />
                <br/>
            </section>
        </div>
    )
}

export { Category }