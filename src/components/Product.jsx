// Importamos useParams para obtener el id desde la url
import { useParams } from "react-router-dom"
// Importamos useFetcher para hacer la peticion del producto a la api por el id
import useFetcher from "../hooks/useFetcher"

const Product = () => {
  const {id = ''} = useParams()
  const {data: product, error} = useFetcher(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
  if (error) return <p>{error}</p>
  return (
    <div>
        <h4>{product.product_name}</h4>
    </div>
  )
}

export default Product