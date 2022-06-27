import Header from "../components/Header"
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ContextProvider } from "../context/ProductContext"

function App() {
  return (
    <ContextProvider>
      <Header/>
      <div className="App">
        <Suspense fallback={<p>...loading suspense</p>}>
          <Outlet/>
        </Suspense>
      </div>
    </ContextProvider>
  )
}

export default App
