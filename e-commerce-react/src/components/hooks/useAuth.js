import { useState } from "react"

const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false)
        
    const login = (user, pass) => {
        console.log(user, pass)
        setIsAuth(true)
    }

    return {login, isAuth}
}

export { useAuth }