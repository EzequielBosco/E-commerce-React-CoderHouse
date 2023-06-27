import products from "../../../../data/products"
import { Category } from "../category/category"
import "../category.css"

const CategoryList = () => {

    const uniqueCategories = [...new Set(products.map((p) => p.category))]
    const Categories = uniqueCategories.map((category) => {
        return(<Category category={category} />)
    })

    return( 
        <div id="categories">
            {Categories}
        </div>
    )
}

export { CategoryList }