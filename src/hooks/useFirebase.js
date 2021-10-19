import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth'
import { useState, useEffect } from 'react'
import initializationAuthentication from '../firebase/firebase.init'

initializationAuthentication()
const useFirebase = () => {
    const [users, setUser] = useState({})
    const [isLoading , setIsloading]= useState(true)
   const auth = getAuth()
    const signInUsingGoogle = () => {
       setIsloading(true)
      const GoogleProvider = new GoogleAuthProvider()
      signInWithPopup(auth, GoogleProvider)
         .then((result) => {
            setUser(result.user)
            console.log(users)
         })
         .catch((e) => console.log(e))
         .finally(() => setIsloading(false))
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
   return {
      users,
      signInUsingGoogle,
       logout,
      isLoading
   }
}

export default useFirebase
