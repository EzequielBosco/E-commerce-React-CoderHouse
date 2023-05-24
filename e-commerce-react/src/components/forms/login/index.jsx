import { Button } from "../../common/button";

const LoginForm = () => {

    const login = () => {
        //falta
    }

    return (
        <form onSubmit={login}>
            <div className="form-control">
                <label value="Correo"></label>
                <input type="email" name="email" id="email-control" ></input>
            </div>            
            <div className="form-control">
                <label value="Contraseña"></label>
                <input type="password" name="pass" id="pass-control" ></input>
            </div>
            <Button text="Iniciar sesion" type="submit"/>
        </form>
    )
}

export { LoginForm }