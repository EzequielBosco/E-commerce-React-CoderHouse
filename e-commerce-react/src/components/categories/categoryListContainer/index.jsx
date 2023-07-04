import { useEffect, useState } from "react"
import { CategoryList } from "../categoryList"
import { getCategory } from "../../../services/firebase/categories"

const CategoryListContainer = () => {

    const [category, setCategory] = useState()

    useEffect(() => {
        getCategory().then((data => {
            setCategory(data)
        }))
    }, [])

    return( 
        <div id="list-products">
            { category && <CategoryList category={category} />}
        </div>
    )
}

export { CategoryListContainer }