import { useState } from "react";
import { Button } from "../../common/button";

const LoginForm = ({onSubmit}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = (e) => {
        e.preventDefault()
        onSubmit(email, password)
    }

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
            <Button text="Iniciar sesion" type="submit"/>
        </form>
    )
}

export { LoginForm }