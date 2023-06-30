import products from "../../data/products";

const getCategories = async (category) => {
    return new Promise((resolve, reject) => {
        const productsFilter = products.filter((product) => product.category === category)
        setTimeout(() => {
            resolve(productsFilter)
        }, 400)}
)}

const getCategory = async (category) => {
    return new Promise((resolve, reject) => {
        resolve(products.find((product) => product.category === category))}
)}

export { getCategories, getCategory }