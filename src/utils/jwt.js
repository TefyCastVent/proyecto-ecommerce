import jwtDecode from "jwt-decode"
import axios from "axios"
// validar el token
const isValidToken = (token)=>{
if(!token) {
    return false
}
const {exp} = jwtDecode(token)
const currentTime = Date.now()
return (exp*1000) > currentTime
}

// guardar la sesión
const setSession = (token) => {
  if(token){
    window.localStorage.token = token
  }else{
    window.localStorage.removeItem('token')
  }
}

// obtener datos del usuario
const getUsuario = async (token) => {
  if(isValidToken(token)){
    const userId = jwtDecode(token).id
    const res = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/${userId}`, {
      headers: {
        'Authorization': 'JWT ' + token
      }
    });
  return res
  } else {
    return null
  }
  
}

export {isValidToken, setSession, getUsuario}

