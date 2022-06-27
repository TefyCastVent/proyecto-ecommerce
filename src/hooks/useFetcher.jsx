import axios from "axios"
import useSWR from "swr"
// Código que se usará para pedir los datos de los productos

// Definimos la función que pedirá todos los datos y la llamaremos fetcher
const fetcher = (url) => axios.get(url).then(response => response.data).then(error => error)

// Construimos nuestro hook, donde usaremos swr 
const useFetcher = (baseUrl) => {
  return useSWR(baseUrl,fetcher,{suspense: true})
}

// Exportamos el hook

export default useFetcher