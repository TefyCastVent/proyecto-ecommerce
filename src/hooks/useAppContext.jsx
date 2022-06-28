import { useContext } from "react"
import { AppContext } from "../context/AppContext"
const useAppContext = () => {
  const context = useContext (AppContext)
  
  // Creamos un error para el contexto en caso de que no se encuentre
  if (!context) throw new Error ('No hay un contexto activo')

  return context
}

export default useAppContext