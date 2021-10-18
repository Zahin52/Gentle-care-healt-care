import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import Rating from 'react-rating'
import './card.css'

export default function card({ info, displayConfig }) {
   console.log(info)
   const { image, title, instructor, rating, fee } = info
   const {
      displayRating,
      displayInstructor,
      displayFee,
      displayButton,
      displayTitle,
   } = displayConfig
   return (
      <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow  text-capitalize text-center ">
            <div style={{ overflow: 'hidden' }}>
               <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body d-flex flex-column p-0">
               <div className="">
                  {displayTitle && (
                     <h5
                        className="card-title text-secondary fw-bold p-3"
                        style={{ 'min-height': '3.5rem' }}
                     >
                        {title}
                     </h5>
                  )}
                  <div className="card-text ">
                     {displayInstructor && (
                        <div className="text-secondary p-3">
                           <span>Instructor :</span> {instructor}
                        </div>
                     )}
                     {displayRating && (
                        <div className="p-3" style={{ color: 'goldenrod' }}>
                           <Rating
                              emptySymbol="fa fa-star-o fa-2x"
                              fullSymbol="fa fa-star fa-2x"
                              initialRating={rating}
                              readonly={true}
                              fractions={6}
                           />
                        </div>
                     )}
                     {displayFee && (
                        <div className=" text-secondary p-3">
                           <span className="fs-3">Fee : $ {fee}</span>
                        </div>
                     )}
                  </div>
                  {displayButton && (
                     <div className="p-3">
                        <NavLink
                           to="/services"
                           className="btn btn-primary text-capitalize w-100 mt-auto rounded-pill"
                        >
                           Buy now
                        </NavLink>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
