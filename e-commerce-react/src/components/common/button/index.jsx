import "./button.css"

const Button = ({children , id, className, type, onClick}) => {

    return (
        <button id={id} className={className} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button }