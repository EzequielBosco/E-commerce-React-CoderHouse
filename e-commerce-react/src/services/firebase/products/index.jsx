import { collection, getDocs, doc, docs, getFirestore } from "firebase/firestore"

const getProducts = async () => {
    const db = getFirestore()

    const collectionRef = collection(db, "productos")
    const snapshot = await getDocs(collectionRef) 

    if (!snapshot.empty) {
        return (snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }

    return null
}

export { getProducts }