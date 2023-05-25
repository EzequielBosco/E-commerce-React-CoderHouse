import cartImage from '../../../../assets/carrito-de-compras.png'

const CartWidget = () => {
    return (
        <div>
            <a href="index.html"><img src={cartImage} height="25px" /></a>
            <span>0</span>
        </div>
    )
}

export { CartWidget }