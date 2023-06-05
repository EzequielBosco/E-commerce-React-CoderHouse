import { LoginForm } from "../../components/forms/login"
import { useAuth } from "../../components/hooks/useAuth"

const Login = () => {
    const { login, isAuth } = useAuth()
    return (
        <div>
            <h1>Iniciar Sesion</h1>
            {isAuth ? "Usuario logueado" : "Usuario no logueado"}
            <LoginForm onSubmit={login} />
        </div>
    )
}

export { Login }