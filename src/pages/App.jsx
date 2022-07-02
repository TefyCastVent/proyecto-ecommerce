import Header from "../components/Header"
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ContextProvider } from "../context/AppContext"

function App() {
  return (
    <ContextProvider>
      <Header/>
      <div className="App">
        <Suspense fallback={
          <div className='loadingSpinnerContainer'>
            <div className="loadingSpinner"></div>
          </div>
          }>
          <Outlet/>
        </Suspense>
      </div>
    </ContextProvider>
  )
}

export default App
