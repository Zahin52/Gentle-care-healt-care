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


import initializationAuthentication from '../firebase/firebase.init'


initializationAuthentication()
const useFirebase = () => {
   const [users, setUser] = useState({})
   const [isLoading, setIsloading] = useState(true)
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
   const setUserName = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name,
      })
         .then(() => {
            window.location.reload()
         })
         .catch((error) => {
            // An error occurred
            // ...
         })
   }
   const createNewUser = ({ email, pass, name }) => {
      setIsloading(true)
      console.log('users', email, pass, name)
      createUserWithEmailAndPassword(auth, email, pass)
         .then((result) => {
            setUserName(name)
            setUser(result.user)
            console.log(users)
         })
         .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            // ..
         })
         .finally(() => {
            setIsloading(false)
         })
   }
   const login = ({ email, pass }) => {
      setIsloading(true)
      console.log(email, pass)
      signInWithEmailAndPassword(auth, email, pass)
         .then((result) => {
            // Signed in
            setUser(result.user)
            // ...
         })
         .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
         })
         .finally(() => {
            setIsloading(false)
         })
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
