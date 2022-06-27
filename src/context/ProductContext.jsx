import { createContext, useState } from "react";

const AppContext = createContext(null)

const ContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  
  const initialValue = {
    setProducts
  }

  return (
      <AppContext.Provider value={initialValue}>
        {children}
      </AppContext.Provider>
  )
}

export {AppContext, ContextProvider}