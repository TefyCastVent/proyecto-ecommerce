import {FaUser} from 'react-icons/fa'

const Register = () => {
  return (
    <div className='container'>
      <section className='heading'>
        <h2>
            <FaUser/> Sign Up
        </h2>
        <p>Por favor crea un nuevo usuario</p>
      </section>
    <form className='container-sm'>
      <div className="mb-1">
        <label htmlFor="exampleInputPassword1" className="form-label">First name</label>
        <input type="text" className="form-control" id="exampleInputName" />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleInputPassword1" className="form-label">Last name</label>
        <input type="text" className="form-control" id="exampleInputLastName" />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleInputPassword1" className="form-label">Birthday</label>
        <input type="text" className="form-control" id="exampleInputBirthday" />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
        <input type="text" className="form-control" id="exampleInputBirthday" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password check</label>
        <input type="password" className="form-control" id="exampleInputPassword2" />
      </div>
      <button type="submit" className="btn btn-dark boton">Sign Up</button>
    </form>    
    </div>
  )
}

export default Register