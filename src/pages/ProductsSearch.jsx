import ProductList from "../components/ProductList"
import useAppContext from "../hooks/useAppContext"

const ProductsSearch = () => {
    const {filterProducts,sms} = useAppContext()
    
    if (sms.type === 'error'){
        return (<p className='alert alert-danger' role='alert'>{sms.message}</p>)
    }
    
    if (sms.type === 'success'){
        return (
          <div>
            <p className='alert alert-success' role='alert'>{sms.message}</p>
            <ProductList productsList={filterProducts} />
          </div>
        )}
}

export default ProductsSearch