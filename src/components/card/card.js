import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import Rating from 'react-rating'
import './card.css'

export default function card({ info }) {
   console.log(info)
   const { image, title, instructor, rating, fee } = info
   return (
      <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow  text-capitalize text-center">
            <div style={{ overflow: 'hidden' }}>
               <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body d-flex flex-column">
               <h5
                  className="card-title text-secondary fw-bold"
                  style={{ 'min-height': '3.5rem' }}
               >
                  {title}
               </h5>
               <div className="card-text">
                  <div className="text-secondary">
                     <span>Instructor :</span> {instructor}
                  </div>
                  <div style={{ color: 'goldenrod' }}>
                     <Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        initialRating={rating}
                        readonly={true}
                        fractions={6}
                     />
                  </div>
                  <div className="p-2 text-secondary">
                     <span className="fs-3">Fee : $ {fee}</span>
                  </div>
               </div>
               <NavLink
                  to="/services"
                  className="btn btn-primary text-capitalize w-100 mt-auto rounded-pill"
               >
                  Buy now
               </NavLink>
            </div>
         </div>
      </div>
   )
}
