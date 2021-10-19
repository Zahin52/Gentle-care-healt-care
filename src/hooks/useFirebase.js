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
   const auth = getAuth()
   const signInUsingGoogle = () => {
      const GoogleProvider = new GoogleAuthProvider()
      signInWithPopup(auth, GoogleProvider).then((result) => {
          setUser(result.user)
          console.log(users);
      }).catch((e)=> console.log(e))
   }
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
            setUser({})
         }
      })
      return () => unsubscribed
   }, [])

   const logout = () => {
      signOut(auth).then((res) => {
         setUser({})
      })
   }
   return {
      users,
      signInUsingGoogle,
      logout
   }
}

export default useFirebase
