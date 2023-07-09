import "./footer.css"

const Footer = () => {
    return (
        <footer className="d-flex align-items-center justify-content-between">
            
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <p>Copyright © 2023 Apple Inc. Todos los derechos reservados.</p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center">
                <p>Sitio web diseñado por <a className="underline white" target="blank" href="https://github.com/EzequielBosco">- Ezequiel Bosco -</a></p>
            </div>
            <div className="col d-flex align-items-center justify-content-center mt-2">
                <a href="https://www.apple.com/la/business/enterprise/" target="blank"><p>Apple y la empresa - </p></a>
                <a href="https://www.apple.com/la/contact/" target="blank"> <p>- Contactar con Apple</p></a>
            </div>
            <div className="main-content"></div>
        </footer>
    )
}

export { Footer }