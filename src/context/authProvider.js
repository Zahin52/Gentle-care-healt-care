import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

export const AuthContext = createContext()

export default function authProvider({children}) {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const allContext = useFirebase()
    return <AuthContext.Provider value={allContext}>
       {children}
   </AuthContext.Provider>
}
