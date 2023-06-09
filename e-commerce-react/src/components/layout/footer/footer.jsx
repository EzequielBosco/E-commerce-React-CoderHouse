import "./footer.css"

const Footer = () => {
    return (
        <footer className="d-flex align-items-center justify-content-between">
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <p>Copyright © 2023 Apple Inc. Todos los derechos reservados.</p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center">
                <p>Sitio web diseñado por <a className="underline" target="blank" href="https://github.com/EzequielBosco">- Ezequiel Bosco -</a></p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center">
                3
            </div>
        </footer>
    )
}

export { Footer }