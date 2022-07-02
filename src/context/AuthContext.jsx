import { useState, useContext, createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { isValidToken, setSession, getUsuario} from '../utils/jwt'
import jwtDecode from "jwt-decode"

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [authed, setAuthed] = useState(() => {
    const token = window.localStorage.token || ''

    return !!(token && isValidToken(token))
  })
  const [globalUser, setGlobalUser] = useState(() => {
    const token = window.localStorage.token || ''
    if (isValidToken(token)){
      return jwtDecode(token)
    }
    else{
      return null
    }
  })
  const [init, setInit] = useState(false)
  //Obtenemos el token al logear un usuario, y ponemos que tenemos usuario, además que ponemos en el localStorage el token
  const loginAuth = async({email, password}) => {
    const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login',{
        email,
        password
    })
    const user = response.data
    setSession(user.token)
    setAuthed(true)
    console.log('inicio de sesion')
    getUsuario(user.token).then(result => setGlobalUser(result.data))
  }
  
  useEffect(()=>{
    //Obtenemos el token del localStorage
    const token = window.localStorage.token || ''
    setInit(true) //Se actualizó la pagina
    try {
      if(token && isValidToken(token)){
        setAuthed(true)
        setSession(token)
        getUsuario(token).then(result => setGlobalUser(result.data))
        console.log('sesion activa')
      } else {
        setAuthed(false)
        console.log('no hay sesion')
      }
    } catch (error) {
      console.log('catch error', error)
      setAuthed(false)
    }
  },[])
  
  const logOut = () => {
    setSession(null)
    setAuthed(false)
  }

  console.log(authed,' authed')

  const initialValues ={  
    loginAuth,
    authed,
    logOut,
    globalUser
  }

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
    return useContext(AuthContext)
}

export {useAuthContext, AuthProvider}