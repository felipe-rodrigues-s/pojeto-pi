import React from 'react'
import StorageContext from './Context'
import useStorage from '../../utils/useStorage'

const StorageProvider = ({children})=>{
  const  [token, setToken] = useStorage('token');
  return (
    <StorageContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export default StorageProvider
