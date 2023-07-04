import { Product } from "../product"

const ProductList = ({ products }) => {
    
    return( 
        <div id="list-products">
            {products.map((product) => {
                return(<Product key={product.id} {...product} />)
            })}
        </div>
    )
}

export { ProductList }