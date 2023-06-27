import { useState } from "react";
import { Button } from "../../common/button";
import { Select } from "../../common/select";

const LoginForm = ({onSubmit}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = (e) => {
        e.preventDefault()
        onSubmit(email, password)
    }

    const goSignUp = () => {
        console.log("ir a sign up")
    }

    // const selects = [
    //     {value: 1, label: "auto"},
    //     {value: 2, label: "casa"}
    // ]

    // const pruebaSelect = (e) => {
    //     console.log(e.target.value)
    // }

    return (
        <form onSubmit={submitLogin}>
            <div className="form-control">
                <label value="Correo"></label>
                <input type="email" name="email" id="email-control" value={email} onChange={e => setEmail(e.target.value)} ></input>
            </div>            
            <div className="form-control">
                <label value="Contraseña"></label>
                <input type="password" name="pass" id="pass-control" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <Button type="submit">Iniciar sesión</Button>
            <Button text="Iniciar sesion" type="button" onClick={goSignUp}>Crear una cuenta</Button> 
            {/* <Select items={selects} onChange={pruebaSelect}/> */}
        </form>
    )
}

export { LoginForm }