import React from 'react'
import "./login.css"
import { NavLink } from 'react-router-dom';
export default function Login() {
   return (
      <div className=" mx-auto">
         <div className="d-flex justify-content-center">
            <div className=" d-flex justify-content-center">
               <div className="card ">
                  <form onsubmit="event.preventDefault()" className="box ">
                     <h1>Login</h1>
                     <p className="text-muted">
                        {' '}
                        Please enter your login and password!
                     </p>{' '}
                     <input type="text" name="" placeholder="Username" />{' '}
                     <input type="password" name="" placeholder="Password" />{' '}
                     <input type="submit" name="" value="Login" href="#" />
                           <div className="col-md-12">
                               <p className="text-white">Login with google </p>
                        <ul className="social-network social-circle">
                           
                           <li>
                              <NavLink
                                 to="/"
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
