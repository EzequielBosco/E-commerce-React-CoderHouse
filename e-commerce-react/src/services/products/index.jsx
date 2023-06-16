import products from "../../data/products";

const getProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 800)}
)}

const getProduct = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(products.find((product) => product.id === id))}
)}

export { getProducts, getProduct }