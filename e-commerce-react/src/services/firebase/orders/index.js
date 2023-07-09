import { doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore"

const createOrder = async (data, products) => {
    const orderData = {
        ...data, products: [...products],
        timestamp: new Date().getTime(),
    }
    const db = getFirestore()
    const collectionRef = collection(db, "ordenes")
    console.log(orderData)
    await addDoc(collectionRef, orderData)
}

const updateOrder = async (id, data) => {

    const db = getFirestore()
    const docRef = doc(db, "orden", id)
    const response = await updateDoc(docRef, data)

    console.log(response)
}

export { createOrder, updateOrder }