import { useRoutes, Navigate } from "react-router-dom"
import Product from "./components/Product"
import ProductList from "./components/ProductList"
import App from './pages/App'
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
          element: <ProductList/>,
          index: true
        },
        {
          path: 'product/:id',
          element: <Product/>
        }
      ]
    }
  ])
  return element
}
export default Paths