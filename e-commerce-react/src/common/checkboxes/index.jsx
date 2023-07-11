const Checkboxes = ({ items, onChange }) => {
    return (
        <>
            {items.map((item) => {
                return ( 
                    <div className="d-flex gap-2 m-2">
                        <input type="checkbox" id={`checkbox${item.value}`} required={item.required ? true : false} onChange={onChange}/>
                        <label htmlFor={`checkbox${item.value}`}>{item.label}</label>
                    </div>
                )}
            )}
        </>
    )
}

export { Checkboxes }