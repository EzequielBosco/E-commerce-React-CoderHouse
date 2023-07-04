import { collection, getDocs, doc, docs, where, query } from "firebase/firestore"
import { db } from "../config"

const getCategories = async (category) => {

    const productsRef = collection(db, "productos")
    const snapshot = await getDocs(productsRef) 
    const q = query(productsRef, where("category", "==", category))

    if (!snapshot.empty) {
        const filtrados = await getDocs(q)
        return filtrados.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    }

    return null
}

const getCategory = async () => {
    const productsRef = collection(db, "productos")
    const snapshot = await getDocs(productsRef)

    const uniqueCategories = new Set()
    snapshot.forEach((doc) => {
        const data = doc.data()
        if (data.category) {
            uniqueCategories.add(data.category)
        }
    })

    const categories = Array.from(uniqueCategories)
    return categories
}

export { getCategories, getCategory }