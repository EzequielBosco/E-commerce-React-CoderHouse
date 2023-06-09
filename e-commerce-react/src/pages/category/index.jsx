import "./category.css"
import { CategoryList } from "../../components/common/index"

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
            <section id="section-category">
                
            </section>
        </div>
    )
}

export { Category }