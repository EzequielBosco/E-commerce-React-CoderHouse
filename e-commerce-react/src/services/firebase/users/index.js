import { doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore"

const createOrder = async (data) => {

    const db = getFirestore()
    const collectionRef = collection(db, "ordenes")
    await addDoc(collectionRef, data)
}

const updateOrder = async (id, data) => {

    const db = getFirestore()
    const docRef = doc(db, "orden", id)
    const response = await updateDoc(docRef, data)

    console.log(response)
}

export { createOrder, updateOrder }