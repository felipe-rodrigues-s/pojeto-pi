import React, { createContext, useState, useEffect } from "react";

import {useNavigate} from 'react-router-dom';

import {api, createSession} from '../../utils/api'

export const AuthContext = createContext();

export  const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [loading, serLoading] = useState(true)


  useEffect(() => {
    const  recoveredUser = localStorage.getItem('user');
    if(recoveredUser){
      setUser(JSON.parse(recoveredUser))
    }

    serLoading(false)
  },[])



  const login = async (email, password) =>{

    const response = await createSession(email, password)
    console.log('Login', response.data);

    const  loggedUser = response.data.user

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);

    api.defaults.headers.authorization = 'Bearer ' + token;

      setUser(loggedUser)
      navigate("/")

  }



  const logout = () =>{
    console.log('Logout')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    api.defaults.headers.authorization = null;
    setUser(null)
    navigate("/login")
   };

  return (
    <AuthContext.Provider
      value={{
        autenticated: !!user, user, loading, login, logout
      }}>
        {children}
    </AuthContext.Provider>
  )
  };


