import products from "../../data/products";

const getCategories = async () => {
    return Promise((resolve, reject) => {
        resolve(products)}
)}

const getCategory = async (id) => {
    return Promise((resolve, reject) => {
        resolve(category.find((category) => category.id == id))}
)}

export { getCategories, getCategory }