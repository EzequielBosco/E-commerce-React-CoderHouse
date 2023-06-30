import { createContext, useContext, useState } from "react"

const RouteContext = createContext()

const useRouteContext = () => useContext(RouteContext)

const RouteProvider = ({ children }) => {
  const [currentRoute] = useState("")

  const value = {
    currentRoute,
  }

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  )
}

export { RouteProvider, useRouteContext }