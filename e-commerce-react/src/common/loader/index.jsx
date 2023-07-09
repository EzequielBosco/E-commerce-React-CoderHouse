import { useEffect, useState } from "react"
import "./loader.css"

const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700)
    }, [])
    
    return (
        <>
            { loading ? 
            <>
                <h2 className="text-center m-2 white">Cargando..</h2>
                <section class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </section>
            </> : "" }
        </>
    )
}

export { Loader }