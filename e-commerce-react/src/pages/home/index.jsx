import { ProductList } from "../../components/common/containers/productList"

const Home = () => {
    return (
        <div>
            <h1 className="container text-center">Esta es mi pagina Home</h1>
            <h2 class="m-2">Lista de productos</h2>
            <div className="m-5">
                <ProductList/>
            </div>
        </div>
    )
}

export { Home }