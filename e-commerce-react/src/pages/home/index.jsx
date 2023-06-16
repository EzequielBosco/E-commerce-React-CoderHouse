import "./home.css"
import { Link } from "react-router-dom"
import { Button } from "../../components/common"
import { DivNews } from "../../components/common"
import ReactPlayer from "react-player"
import { useState, useEffect } from "react"

const Home = () => {

    const [showText, setShowText] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setShowText(false);
        }, 1720);
    
        return () => {
        clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <main id="main-home">
                <ReactPlayer className="react-player" url={require("../../assets/home-video.mp4")} playing loop muted width="100%" height="100%" />
            {showText && (<div id="text-video"><h1 className="white">PROXIMAMENTE</h1></div>)}
            </main>
            <section id="section-1-home">
                <h4 className="container text-center pt-4 pre-title ">Nuevo</h4>
                <h1 className="container text-center title black">iPhone 14</h1>
            </section>
            <section id="imagen-section-2-home">
            <h2 className="text-center m-3 p-2 title">Maravilla tras maravilla.</h2>
            <Link to="/productList/iphone/18"><Button id="button-color">Más información</Button></Link>
            </section>
            <section id="section-2-home">
                <DivNews/>
            </section>
        </div>
    )
}

export { Home }