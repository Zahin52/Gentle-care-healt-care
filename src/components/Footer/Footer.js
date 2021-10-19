import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

export default function Footer() {
   return (
      <div className="bg-dark text-white p-4" style={{ 'z-index': '10' }}>
         <div className="container text-center">
            <div className="d-flex justify-content-between  mb-3">
               <div className="">
                  <ul
                     style={{ 'list-style-type': 'none' }}
                     className="text-center fs-4  text-white"
                  >
                     <div>
                        <NavLink
                           className="text-decoration-none text-white"
                           to="/"
                        >
                           Home
                        </NavLink>
                     </div>
                     <div>
                        <NavLink
                           className="text-decoration-none text-white"
                           to="/appointment"
                        >
                           Appointment
                        </NavLink>
                     </div>
                     <div>
                        <NavHashLink
                           smooth
                           className="nav-link text-white"
                           to="/#services"
                        >
                           Services
                        </NavHashLink>
                     </div>
                  </ul>
               </div>

               <div>
                  <h1>Contact us</h1>
                  <div>
                     <span className="mx-2">
                        <i class="fa fa-facebook-square fa-2x"></i>
                     </span>
                     <span className="mx-2">
                        <i class="fa fa-github-square fa-2x"></i>
                     </span>
                     <span className="mx-2">
                        <i class="fa fa-twitter-square fa-2x"></i>
                     </span>
                  </div>
               </div>
            </div>
            <p>Copyright &copy;2021 skill booster</p>
         </div>
      </div>
   )
}
