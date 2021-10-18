import React, { useEffect, useState } from 'react'
import Card from '../card/card'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'

export default function Home() {
   const [courses, setCourses] = useState([])
   useEffect(() => {
      fetch('data.json')
         .then((res) => res.json())
         .then((data) => setCourses(data))
   }, [])
   return (
      <div>
         <div className="banner ">
            <div className="heading d-flex justify-content-center align-items-center flex-column">
               <h1 className="text-capitalize">Welcome to the Gentle Care</h1>
               <p className="text-capitalize">
                  Your Health care develompemt gym
               </p>
            </div>
         </div>
         <SelctionContainer
            sectionTitle="Our services"
            data={courses}
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Our Doctors"
            data={courses}
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Gallay"
            data={courses}
         ></SelctionContainer>
         {/* <div className="container">
            <h1
               style={{ 'background-color': '#fc6c85' }}
               className="title fw-bold text-capitalize mt-5 mb-4 text-center rounded-pill text-white py-2 opacity-75"
            >
               Our services
            </h1>
         </div>
         <div id="services" className=" px-4">
            <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
               {courses.slice(0, 6).map((data, i) => (
                  <Card key={i} info={data} />
               ))}
            </div>
         </div>
         <div className="container">
            <h1 className="title fw-bold text-capitalize mt-5 mb-4 text-center bg-secondary rounded-pill text-white py-2 opacity-75">
               Our Doctors
            </h1>
         </div>
         <div id="services" className=" px-4">
            <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
               {courses.slice(0, 3).map((data, i) => (
                  <Card key={i} info={data} />
               ))}
            </div>
         </div>
         <div className="container">
            <h1 className="title fw-bold text-capitalize mt-5 mb-4 text-center bg-secondary rounded-pill text-white py-2 opacity-75">
               Gallary
            </h1>
         </div>
         <div id="services" className=" px-4">
            <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
               {courses.slice(0, 6).map((data, i) => (
                  <Card key={i} info={data} />
               ))}
            </div>
         </div> */}
      </div>
   )
}
