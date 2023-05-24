import { Product } from "../../product"

const ProductList = () => {
    return ( 
        <div>
            <Product name="iPhone 13" description="Big" id="1" price="300000$" category="Celulares" status="completed" img="" />
            <Product name="iPhone 12" description="Medium" id="2" price="280000$" category="Celulares" status="completed" img="" />
            <Product name="iPhone 11" description="Small" id="3" price="200000$" category="Celulares" status="completed" img="" />
        </div>
    )
}

export { ProductList }