import { CartWidget } from "./cartWidget/cartWidget"
import { Categories } from "./categories"
import { LogoImage } from "./logo"
import { Sesion } from "./sesion"

const NavBar = () => {
    return (
        <nav className="navbar d-flex align-items-center justify-content-around">
            <LogoImage/>
            <Categories/>
            <Sesion />
            <CartWidget/>
        </nav>
    )
}

export { NavBar }