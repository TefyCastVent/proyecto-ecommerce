import { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import { isValidToken, setSession, getUsuario} from '../utils/jwt'

const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [authed, setAuthed] = useState(() => {
    const token = window.localStorage.token || ''

    return !!(token && isValidToken(token))
  })
  const [globalUser, setGlobalUser] = useState(() => {
    const token = window.localStorage.token || ''
    if (isValidToken(token)){
      return getUsuario(token).then(result => setGlobalUser(result.data))
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
    setGlobalUser(null)
  }

  console.log(authed,' authed')

  const register = async (userdata) => {
    const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup',userdata)
    const res = response.data
    return res
  }

  const initialValues ={  
    loginAuth,
    authed,
    logOut,
    globalUser,
    register
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