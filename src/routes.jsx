import { useRoutes, Navigate } from "react-router-dom"
import ProductsHome from "./pages/ProductsHome"
import Product from "./components/Product"
import App from './pages/App'
import ProductsSearch from "./pages/ProductsSearch"
const Paths = () => {
  const element = useRoutes ([
    {
      path: '/',
      element: <Navigate to='/products' replace/>
    },
    {
      path: '/products',
      element: <App/>,
      children: [
        {
          element: <ProductsHome/>,
          index: true
        },
        {
          path: 'product/:id',
          element: <Product/>
        },
        {
          path: 'search',
          element: <ProductsSearch/>
        }
      ]
    }
  ])
  return element
}
export default Paths