import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Servicecard/Servicecard'

export default function Services() {
   const [details, setdetails] = useState([])
   useEffect(() => {
      fetch('/serviceData.json')
         .then((res) => res.json())
         .then((data) => setdetails(data))
   }, [])
    console.log(details);
    const { id } = useParams()
    console.log("id id ", id);
    let detail = details.filter((item => (item.id===id)))
    console.log(detail)
   return (
      <div className="container">
         <div>
            <h1 className="fw-bold text-capitalize mt-5 mb-4 text-center text-white opacity-75 bg-secondary px-4 py-2 rounded-pill border">
               All details
            </h1>
         </div>
         <div className=" " style={{ 'min-height': '100vh' }}>
            <div className="row row-cols-1 row-cols-lg-3  mx-auto justify-content-center my-4 text-capitalize">
                   {detail.length && detail[0]['details']}
            </div>
         </div>
      </div>
   )
}
