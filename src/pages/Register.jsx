import {FaUser} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Register = () => {
  const { register } = useAuthContext()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name:'',
    birth_date:'',
    gender:'',
    email: '',
    password: '',
    password_check: ''
  })

  const {first_name,last_name,birth_date,gender, email, password, password_check} = formData
 
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((preState) => ({
        ...preState,
        [e.target.name] : e.target.value
    }))
  }
  console.log(formData)
  const onSubmit = (e) => {
    e.preventDefault()
    if (password!==password_check){
      console.log('ERROR DE PASSWORD')
    } else {
      const userData = {
        first_name,
        last_name,
        birth_date,
        gender,
        email,
        password
      }
      register(userData)
    }
  }

  return (
    <div className='container'>
      <section className='heading'>
        <h2>
            <FaUser/> Sign Up
        </h2>
        <p>Por favor crea un nuevo usuario</p>
      </section>
    <form className='container-sm' onSubmit={onSubmit}>

      <div className="mb-1">
        <label className="form-label">First name</label>
        <input name ='first_name' id="firt-name" type="text" className="form-control" onChange={onChange} />
      </div>

      <div className="mb-1">
        <label className="form-label">Last name</label>
        <input name ='last_name' id="last-name" type="text" className="form-control"  onChange={onChange} />
      </div>

      <div className="mb-1">
        <label className="form-label">birth_date</label>
        <input name='birth_date' id="birth_date" type="date" className="form-control" onChange={onChange}/>
      </div>

      <div className='mt-2'>
        <label className="form-label">Gender</label>
        <input name='gender' id="birth_date" type="text" className="form-control" onChange={onChange}/>  
      </div>
      
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input name='email' type="email" className="form-control" id="email" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input name='password' type="password" className="form-control" id="password" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password check</label>
        <input name='password_check' type="password" className="form-control" id="password2" onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-dark boton mb-2">Sign Up</button>
    </form>    
    </div>
  )
}

export default Register

/*<div className='d-flex'>
            <div className="form-check">
              <input name='gender' id="gender-F" className="form-check-input" type="radio" onChange={onChange}/>
              <label className="form-check-label" htmlFor="flexRadioDefault1" >
                M
              </label>
            </div>
            <div className="form-check ms-4">
              <input name='gender' id="gender-M" className="form-check-input" type="radio" defaultChecked onChange={onChange}/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                F
              </label>
            </div>
          </div>*/