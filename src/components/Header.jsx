// Link para cuando se da click en home, regresar a donde estan los productos
import { Link, useNavigate } from 'react-router-dom'
// useRef para sacar los datos de lo q se ponga en el buscador
import { useRef } from 'react'
// importamos el contexto
import useAppContext from '../hooks/useAppContext'

const Header = () => {
  const{ setSearchField, handleFilterProducts } = useAppContext()
  const navigate = useNavigate()
  const searchRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    //serachRef.current.value=''
    const trimValue = searchRef.current.value.trim()
    if ( trimValue !== ''){
      handleFilterProducts(trimValue)
      navigate('/products/search', {replace: true})
    }
    event.target.reset()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E-COMMERCE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active " aria-current="page" href="#">Home</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input  ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark btn-outline-light" type="submit">🔍</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Header