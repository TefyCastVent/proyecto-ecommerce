import ProductList from "../components/ProductList"
import { ContextProvider } from "../context/ProductContext"

function App() {
  return (
    <ContextProvider>
    <div className="App">
      app
      <ProductList/>
    </div>
    </ContextProvider>
  )
}

export default App
