import "./footer.css"

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap align-items-center justify-content-center gap-5">
            
            <div className="col-12 col-sm-auto d-flex flex-column justify-content-center align-items-center">
                <p>Copyright © 2023 Apple Inc. Todos los derechos reservados.</p>
            </div>
            <div className="col-12 col-sm-auto d-flex align-items-center justify-content-center">
                <p>Sitio web desarrollado por <a className="underline white d-inline" target="blank" href="https://github.com/EzequielBosco">- Ezequiel Bosco -</a></p>
            </div>
            <div className="col-12 col-sm-auto d-flex align-items-center justify-content-center">
                <a className="underline" href="https://www.apple.com/la/business/enterprise/" target="blank"><p>Apple y la empresa |</p></a>
                <a className="underline" href="https://www.apple.com/la/contact/" target="blank"> <p>&nbsp;Contactar con Apple</p></a>
            </div>
            <div className="main-content"></div>
        </footer>
    )
}

export { Footer }