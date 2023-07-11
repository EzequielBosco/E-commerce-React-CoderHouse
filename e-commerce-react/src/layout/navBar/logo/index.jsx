import logoImage from '../../../assets/apple.svg'
import { NavLink } from "react-router-dom"

const LogoImage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <NavLink to="/"><img src={logoImage} height="18px"/></NavLink>
        </div>
    )
}

export { LogoImage }