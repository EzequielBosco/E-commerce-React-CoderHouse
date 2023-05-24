
const Product = ({id, name, description, img, category, price, status}) => {

    return (
        <div className={`product ${status}`} id={id}>
            <h2 className={name}>Nombre: {name}</h2>
            <div>Precio: {price}</div>
            <div>Categoría: {category}</div>
            <div>Descripción: {description}</div>
            <div>Img: {img} </div>
        </div>
    )
}

export { Product }