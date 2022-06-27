// Link para cuando se da click en home, regresar a donde estan los productos
import {Link} from 'react-router-dom'
// useRef para sacar los datos de lo q se ponga en el buscador
import { useRef } from 'react'

const Header = () => {
  const searchRef = useRef()
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
          <form className="d-flex" role="search">
            <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark btn-outline-light" type="submit">🔍</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Header