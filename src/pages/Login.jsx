import {FaSignInAlt} from 'react-icons/fa'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()
  const { loginAuth } = useAuthContext ()

  const defaultValues = {
    email: "danylo@gmail.com",
    password: "gatito123"
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
     await loginAuth(defaultValues)
     navigate('/')
    } catch (wrong) {
     console.log(wrong)
    }
  }

  return (
    <div className='container'>
      <section className='heading'>
        <h2>
          <FaSignInAlt/> Login
        </h2>
        <p>Por favor teclea tus credenciales</p>
      </section>
    <form onSubmit={handleSubmit} className='container-sm'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-dark boton">Login</button>
    </form>    
    </div>
  )
}

export default Login

/*<select className="form-select mb-3" aria-label="Default select example">
        <option selected>select user type</option>
        <option >Customer</option>
        <option >Admin</option>
      </select>*/