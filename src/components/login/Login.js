import React from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import useAuth from '../../context/useAuth';
export default function Login() {
   const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
     const handleLogin = (e) => {
        e.preventDefault()
        console.log({ email, pass })
     }
    const { signInUsingGoogle } = useAuth()
   return (
      <div className=" mx-auto">
         <div className="d-flex justify-content-center">
            <div className=" d-flex justify-content-center ">
               <div className="card w-100">
                  <form className="box w-100">
                     <h1>Login</h1>
                     <p className="text-muted">
                        Please enter your login and password!
                     </p>
                     <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(event) => setEmail(event.target.value)}
                     />
                     <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(event) => setPass(event.target.value)}
                     />
                     <input
                        type="submit"
                        onClick={(e) => handleLogin(e)}
                        name=""
                        value="Login"
                        href="#"
                     />
                     <div className="col-md-12">
                        <p className="text-white">Login with google </p>
                        <ul className="social-network social-circle">
                           <li>
                                       <NavLink
                                           to="/"
                                 onClick={signInUsingGoogle}
                                 className="icoGoogle"
                                 title="Google +"
                              >
                                 <i className="fa fa-google-plus"></i>
                              </NavLink>
                           </li>
                        </ul>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}
