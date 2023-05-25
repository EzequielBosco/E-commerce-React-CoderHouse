import { CartWidget } from "./cartWidget/cartWidget"
import { Categories } from "./categories"
import { LogoImage } from "./logo"

const NavBar = () => {
    return (
        <nav className="navbar d-flex align-items-center justify-content-around">
            <LogoImage/>
            <Categories/>
            <CartWidget/>
        </nav>
    )
}

export { NavBar }