import { useState } from "react"
import { Button } from "../../common/button"
// import { Select } from "../../common/select";
import { Checkboxes } from "../../common/checkboxes"
import { createOrder } from "../../services/firebase/orders"
import { useContext } from "react"
import { CartContext } from "../../context/contextCart"
import "./form.css"

const PurchaseForm = () => {

    const [fields, setFields] = useState({
        name: "",
        lastname: "",
        email: "",
        email1: "",
        phone: ""
    })
    
    const { purchaseCart } = useContext(CartContext)

    const { cart } = useContext(CartContext)

    const cartProducts = cart.map((p) => ({
        id: p.id, name: p.name, price: p.price, quantity: p.quantity, description: p.description}))

    const submitPurchase = ( event ) => {
        event.preventDefault()

        if (fields.email !== fields.email1) {
            return
        }
        createOrder(fields, cartProducts)
        purchaseCart()
    }

    const itemsCheck = [
        {id: 1, label:'Terminos y condiciones', required:true, value:"Aceptar"},
        {id: 2, label:'Politica de privacidad', required:true, value:"Aceptar"},
        {id: 3, label:"Suscribirme al boletín de noticias", required:false, value:"Suscribirme"}
    ]

    // const selects = [
    //     {value: 1, label: "auto"},
    //     {value: 2, label: "casa"}
    // ]

    return (
        <form onSubmit={submitPurchase} className="form">
            <div className="flex">
                <label value="Nombre">Nombre:
                <input className="input" type="text" name="name" id="name" value={fields["name"]} onChange={e => setFields((state) => ({ ...state, name: e.target.value }))} ></input>
                </label>
                <label value="lastname">Apellido
                <input className="input" type="text" name="lastname" id="pass-control" value={fields["lastname"]} onChange={e => setFields((state) => ({ ...state, lastname: e.target.value }))}></input>
                </label>
                <label value="Telefono">Teléfono
                <input className="input" type="number" name="phone" id="phone" value={fields["phone"]} onChange={e => setFields((state) => ({ ...state, phone: e.target.value }))} ></input>
                </label>
                <label value="Correo">Correo
                <input className="input" type="email" name="email" id="email-control" value={fields["email"]} onChange={e => setFields((state) => ({ ...state, email: e.target.value }))} ></input>
                </label>
                <label value="Correo">Repetir correo
                <input className="input" type="email1" name="email1" id="email-control" value={fields["email1"]} onChange={e => setFields((state) => ({ ...state, email1: e.target.value }))} ></input>
                </label>
            </div>
            <Checkboxes items={itemsCheck} required={true}></Checkboxes>
            <Button className="submit" type="submit">Finalizar compra</Button>
            {/* <Button text="Iniciar sesion" type="button" onClick={goSignUp}>Crear una cuenta</Button>  */}
            {/* <Select items={selects} onChange={pruebaSelect}/> */}
        </form>
    )
}

export { PurchaseForm }