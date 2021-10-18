import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
   return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark " style={{"opacity":".7"}}>
         <div className="container">
            <NavLink
               className="navbar-brand border rounded-pill px-4 py-2"
               to="/"
            >
               Gentle-Care
            </NavLink>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav ms-auto">
                  <NavLink
                     className="nav-link active"
                     aria-current="page"
                     to="/"
                  >
                     Home
                  </NavLink>
                  <NavLink className="nav-link" to="/about">
                     About
                  </NavLink>
                  <NavLink className="nav-link" to="/services">
                     Services
                  </NavLink>
                  <NavLink className="nav-link " to="/whyus">
                     Why us?
                  </NavLink>
               </div>
            </div>
         </div>
      </nav>
   )
}
