import { Category } from "../category/category"
import "../category.css"

const CategoryList = ({ category }) => {

    return( 
        <div id="categories">
            {category.map((category) => (<Category key={category} category={category} />))}
        </div>
    )
}

export { CategoryList }