import "./product.css"

const Product = ({name, image, category, price, status}) => {

    return (
        <div className="product">
            <h3 className={name}>{name}</h3>
            <div>Imagen: {image} </div>
            <p>Precio: {price}</p>
            <span>Categoría: {category}</span>
        </div>
    )
}

export { Product }