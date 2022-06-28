import { useEffect } from "react"
import ProductList from "../components/ProductList"
import useFetcher from "../hooks/useFetcher"
//Importamos el contexto para obtener el valor del buscador
import useAppContext from "../hooks/useAppContext"

const ProductsHome = () => {
  const { setProducts } = useAppContext()
  // Usamos el useFetcher para obtener todos los productos de la api
  const {data: list, error} = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')
  // En caso haya error, mostramos el error
  if (error) return <p>{error.message}</p>
  // <img className='card-img-top' src={index?.image || 'https://definicion.de/wp-content/uploads/2009/06/producto.png'} alt={index.product_name} />
  //Guardamos en el estado global a la lista de productos
  useEffect (()=>{setProducts(list)},[])
  return (
    <div>
        <ProductList productsList={list} />
    </div>
  )
}

export default ProductsHome