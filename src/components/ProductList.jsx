// Importo el useFetcher, donde esta el codigo de las promesas
import useFetcher from "../hooks/useFetcher"
import { useEffect } from 'react'
import useAppContext from "../hooks/useAppContext"
// Importamos el contexto para usarlo


const ProductList = () => {
  // Obtenemos el setProduct del contexto
  const { setProducts } = useAppContext()
  // Usamos el useFetcher para obtener todos los productos de la api
  const {data: list, error} = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')
  // En caso haya error, mostramos el error
  if (error) return <p>{error.message}</p>
  // Le damos al contexto global la lista de productos
  useEffect (()=>{setProducts(list)},[])
  return (
    <section className='row py-5 gy-4'>
      {list.map((index,key) => (
        <div key={key} className='col-3 col-sm-6 col-md-6 col-lg-3'>
          <article className="card">
            <div className="card-body">
              <h4 className='card-title'>{index.product_name}</h4>
            </div>
            <img className='card-img-top' src={index?.image || 'https://definicion.de/wp-content/uploads/2009/06/producto.png'} alt={index.product_name} />
          </article>
        </div>
      ))}
    </section>
  )
}

export default ProductList