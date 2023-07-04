import { collection, getDocs, getDoc, doc } from "firebase/firestore"
import { db } from "../config"

const getProducts = async () => {

    const collectionRef = collection(db, "productos")
    const snapshot = await getDocs(collectionRef) 

    if (!snapshot.empty) {
        return (snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }

    return null
}

const getProduct = async (id) => {
    const productsRef = doc(db, "productos", id)
    const docSnapshot = await getDoc(productsRef)

    if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() }
    }

    return null
}

export { getProducts, getProduct }


