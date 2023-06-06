import { ProductList } from "../../components/common/containers/productListContainer/productList"

const Catalogue = () => {
    return (
        <div>
            <main>
                <h1 className="container text-center">Lista de productos</h1>
            </main>
            <section>
                <div className="m-5">
                    <ProductList/>
                </div>
            </section>
        </div>
    )
}

export { Catalogue }