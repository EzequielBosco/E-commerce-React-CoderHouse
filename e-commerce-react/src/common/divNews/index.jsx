import "./divNews.css"
import image from "../../assets/section-home.jpg"
import image1 from "../../assets/section-home-1.jpg"
import { Link } from "react-router-dom"

const DivNews = () => {
    return(
        <div id="container-div">
            <Link to="/productList/iPhone">
                <div className="div-news" style={{ backgroundImage: `url(${image})`}}>
                    <h1 className="text-center m-4">Privacidad. Esto es iPhone</h1>
                </div>
            </Link>
            <div className="div-news" style={{ backgroundImage: `url(${image1})`}}>
                <h2 className="text-center m-4 white">Cambiarse a iPhone es muy fácil</h2>
            </div>
        </div>
    )
}

export { DivNews }