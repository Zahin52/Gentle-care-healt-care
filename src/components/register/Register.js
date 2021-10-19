import React, { useState } from 'react'
import './register.css'
import { NavLink } from 'react-router-dom'

export default function Register() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')
   const handleSubmit = (e) => {
      e.preventDefault()
      console.log({ name, email, pass })
   }
   return (
      <div className="form-wrapper">
         <div className="main-w3layouts wrapper">
            <h1> SignUp Form</h1>
            <div className="main-agileinfo">
               <div className="agileits-top">
                  <form>
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
                        onClick={(e) => handleSubmit(e)}
                        value="SIGNUP"
                     />
                  </form>
                  <p className="text-white">Login with google </p>
                  <ul className="social-network social-circle d-flex justify-content-center">
                     <li>
                        <NavLink to="/" className="icoGoogle" title="Google +">
                           <i className="fa fa-google-plus"></i>
                        </NavLink>
                     </li>
                  </ul>
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
