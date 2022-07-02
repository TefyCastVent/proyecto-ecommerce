// Link para cuando se da click en home, regresar a donde estan los productos
import { Link, useNavigate } from 'react-router-dom'
// useRef para sacar los datos de lo q se ponga en el buscador
import { useRef } from 'react'
// importamos el contexto
import useAppContext from '../hooks/useAppContext'
import { useAuthContext } from '../context/AuthContext'
import {FaSignInAlt, FaUserCircle , FaUser} from 'react-icons/fa'

const Header = () => {
  const{ handleFilterProducts } = useAppContext()
  const navigate = useNavigate()
  const searchRef = useRef()
  const { authed, logOut, globalUser } = useAuthContext()
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
      <div className="container-fluid d-flex justify-content-start ">
        <a className="navbar-brand" href="#">E-COMMERCE</a>
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
        </ul>
      </div>
      <div className="container d-flex justify-content-end">
        <form className="d-flex m-1 " role="search" onSubmit={handleSubmit}>
          <input  ref={searchRef} className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-dark btn-outline-light" type="submit">🔍</button>
        </form>
        {authed ? (<>
          <button className='btn btn-light m-1' onClick={logOut} >LogOut</button>
          <div>
          <h5 className='navbar-brand'>{globalUser.first_name + ' '+globalUser.last_name}</h5>
          </div>
        </>)
        :(
          <ul className="navbar-nav  d-flex">
          <li>
            <Link to='login' className='btn btn-light m-1'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='register' className='btn btn-light m-1'>
              <FaUser /> Sign Up
            </Link>
          </li> 
        </ul>
        )}
        
      </div>
    </nav>

  )
}

export default Header