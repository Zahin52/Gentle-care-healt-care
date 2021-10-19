import React, { useState } from 'react'
import './register.css'
import { NavLink } from 'react-router-dom'

export default function Register() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name,email,pass});
    }
   return (
      <div className="form-wrapper">
         <div className="main-w3layouts wrapper">
            <h1> SignUp Form</h1>
            <div className="main-agileinfo">
               <div className="agileits-top">
                  <form action="#" method="post">
                     <input
                        className="text w-100"
                        type="text"
                        name="Username"
                        placeholder="Username"
                        required
                        onChange={(event) => setName(event.target.value)}
                     />
                     <input
                        className="text email w-100"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={(event) => setEmail(event.target.value)}
                     />
                     <input
                        className="text w-100"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={(event) => setPass(event.target.value)}
                     />

                     <input
                        type="submit"
                        onClick={handleSubmit}
                        value="SIGNUP"
                     />
                  </form>
                  <p>
                     Don't have an Account?{' '}
                     <NavLink to="/login"> Login Now!</NavLink>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
