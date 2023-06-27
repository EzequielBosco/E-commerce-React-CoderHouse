import { createContext, useState } from "react";

const AuthContext = createContext({
    me: {},
    isAuthenticated: false
})

const AuthProvider = ({ children }) => {

    const [data, setData ] = useState("eze")
    return (
        <AuthContext.Provider value={{ data, setData }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }