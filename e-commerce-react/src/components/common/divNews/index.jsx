import "./divNews.css"
import image from "../../../assets/section-home.jpg"
import image1 from "../../../assets/section-home-1.jpg"

const DivNews = () => {
    return(
        <div id="container-div">
            <div className="div-news" style={{ backgroundImage: `url(${image})`}}>

            </div>
            <div className="div-news" style={{ backgroundImage: `url(${image1})`}}>
            </div>
        </div>
    )
}

export { DivNews }