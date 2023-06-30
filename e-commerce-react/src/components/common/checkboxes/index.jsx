const Checkboxes = ({ items, onChange }) => {
    return (
        <>
            {items.map((item) => {
                return ( 
                    <div>
                        <input type="checkbox" id={`checkbox${item.value}`} required={item.required ? true : false} onChange={onChange}/>
                        <label htmlFor={`checkbox${item.value}`}>{item.label}</label>
                    </div>
                )}
            )}
        </>
    )
}

export { Checkboxes }