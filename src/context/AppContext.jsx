import { createContext, useState } from "react";

const AppContext = createContext(null)

const ContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [sms, setSms] = useState ({type: ''})
  const [searchField, setSearchField] = useState('')
  
  const handleFilterProducts = (value) => {
    const filtered = products.filter(product => {
      return product.product_name.toLowerCase().match(value.toLowerCase())
    })
    
    if (filtered.length === 0) {
      setFilterProducts([])
      setSms({type: 'error',
              message: 'Search not found'})
    } else {
      setFilterProducts (filtered)
      setSms({type: 'success',
              message: 'Search found'})
    }
  }

  const initialValue = {
    setProducts,
    handleFilterProducts,
    filterProducts,
    sms
  }

  return (
      <AppContext.Provider value={initialValue}>
        {children}
      </AppContext.Provider>
  )
}

export {AppContext, ContextProvider}