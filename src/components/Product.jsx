// Importamos useParams para obtener el id desde la url
import { useParams } from "react-router-dom"
// Importamos useFetcher para hacer la peticion del producto a la api por el id
import useFetcher from "../hooks/useFetcher"
import { useAuthContext } from "../context/AuthContext"

const Product = () => {
  const {id = ''} = useParams()
  const {data: product, error} = useFetcher(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
  if (error) return <p>{error}</p>
  const { authed }=useAuthContext()
  return (
    <div className="d-flex justify-content-evenly m-3">
      <div className="d-flex flex-column center width ">
        <h4>{product.product_name}</h4>
        <img className='width img-thumbnail m-3' src={product.image} alt={product.product_name} />
      </div>
      <div className="flex-column left width ">
        <h5 className="btn btn-info mt-5 left ">Description</h5>
        <p>{product.description}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column center">
            <h5 className="btn btn-warning mt-0 left ">Brand</h5>
            <p>{product.brand}</p>
          </div>
          <div className="d-flex flex-column center">
            <h5 className="btn btn-success mt-0 left ">Category</h5>
            <p>{product.category}</p>
          </div>
          <div className="d-flex flex-column center">
            <h5 className="btn btn-danger mt-0 left ">Price</h5>
            <p>${product.price}</p>
          </div>
        </div>
        <div className="center mt-4">
          {authed ? (<button type="button" className="btn btn-secondary boton" >Comprar</button>
          ):(
            <button type="button" className="btn btn-secondary boton" disabled>Comprar</button>
          )}
         
        </div>
      </div>
    </div>
  )
}

export default Product