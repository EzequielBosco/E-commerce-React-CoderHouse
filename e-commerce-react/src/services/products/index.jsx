import products from "../../data/products";

const getProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 400)}
)}

const getProduct = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(products.find((product) => product.id === parseInt(id)))}
)}

export { getProducts, getProduct }