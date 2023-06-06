import { NavLink } from "react-router-dom"

const Categories = () => {
    return (
        <ul className="d-flex align-items-center justify-content-evenly">
            <li><NavLink to="/catalogue">Mac</NavLink></li>
            <li><NavLink to="/catalogue">iPad</NavLink></li>
            <li><NavLink to="/catalogue">iPhone</NavLink></li>
            <li><NavLink to="/catalogue">Apple</NavLink></li>
            <li><NavLink to="/catalogue">Airpods</NavLink></li>
        </ul>
    )
} 

export { Categories }