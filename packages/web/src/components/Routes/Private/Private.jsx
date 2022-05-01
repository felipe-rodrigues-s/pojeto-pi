
import { Navigate} from "react-router-dom";
import { AuthContext } from '../../context/auth'
import {useContext} from "react"
export const Private = ({children})=>{
  const {autenticated, loading} = useContext(AuthContext)

  if(loading){
    return <div className="loading">Carregando...</div>
  }

  if(!autenticated){
    return <Navigate to="/login"/>
  }
  return children
}

