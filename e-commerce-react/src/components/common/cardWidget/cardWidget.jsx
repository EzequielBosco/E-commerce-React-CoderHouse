import cardImage from '../../../assets/carrito-de-compras.png'

const CardWidget = () => {
    return (
        <div>
            <a href="index.html"><img src={cardImage} height="25px" /></a>
            <span>0</span>
        </div>
    )
}

export { CardWidget }