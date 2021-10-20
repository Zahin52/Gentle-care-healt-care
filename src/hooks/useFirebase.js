import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   updateProfile,
   signInWithEmailAndPassword,
} from 'firebase/auth'
import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import initializationAuthentication from '../firebase/firebase.init'

initializationAuthentication()
const useFirebase = () => {
   const [users, setUser] = useState({})
   const [isLoading, setIsloading] = useState(true)
   const auth = getAuth()
   const signInUsingGoogle = () => {
      setIsloading(true)
      const GoogleProvider = new GoogleAuthProvider()
      return signInWithPopup(auth, GoogleProvider)
         
   }
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
            setUser({})
         }
         setIsloading(false)
      })
      return () => unsubscribed
   }, [])

   const logout = () => {
      setIsloading(true)
      signOut(auth)
         .then((res) => {
            setUser({})
         })
         .finally(() => setIsloading(false))
   }
   
   const createNewUser = ({ email, pass}) => {
      setIsloading(true)
      return createUserWithEmailAndPassword(auth, email, pass)
        
   }
   const login = ({ email, pass }) => {
      setIsloading(true)
      console.log(email, pass)
      return signInWithEmailAndPassword(auth, email, pass)
         
   }
   return {
      users,
      signInUsingGoogle,
      logout,
      isLoading,
      createNewUser,
      login,
   }
}

export default useFirebase
