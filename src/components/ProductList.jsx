//Importamos Link para linkear cada producto a su porpia pagina
import { Link } from 'react-router-dom'

const ProductList = ({productsList}) => {
  return (
    <section className='row py-5 gy-4'>
      {productsList.map((index,key) => (
        <div key={key} className='col-3 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`/products/product/${index._id}`}>
            <article className="card">
              <div className="card-body">
                <h4 className='card-title'>{index.product_name}</h4>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default ProductList