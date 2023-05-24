import { CardWidget } from "../../common/cardWidget/cardWidget"
import { Categories } from "./categories"
import { LogoImage } from "./logo"

const NavBar = () => {
    return (
        <nav className="navbar d-flex align-items-center justify-content-around">
            <div>
                <h3>
                    <LogoImage/>
                </h3>
            </div>
            <div>
                <Categories/>
            </div>
            <div>
                <CardWidget/>
            </div>
        </nav>
    )
}

export { NavBar }