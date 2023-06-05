import { ProductList } from "../../components/common/containers/productListContainer/productList"

const Home = () => {
    return (
        <div>
            <main>
                <h1 className="container text-center">Esta es mi pagina Home</h1>
            </main>
            <section>
                <h2 className="m-2">Lista de productos</h2>
                <div className="m-5">
                    <ProductList/>
                </div>
            </section>
        </div>
    )
}

export { Home }