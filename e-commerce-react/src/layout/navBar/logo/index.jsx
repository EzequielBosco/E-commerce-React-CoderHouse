import logoImage from '../../../assets/apple.svg'
import { NavLink } from "react-router-dom"

const LogoImage = () => {
    return (
        <div>
            <NavLink to="/"><img src={logoImage} height="18px"/></NavLink>
        </div>
    )
}

export { LogoImage }