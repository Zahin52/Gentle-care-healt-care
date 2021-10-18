import React, { useEffect, useState } from 'react'
import Card from '../card/card'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'

export default function Home() {
   const [homeInfo, sethomeInfo] = useState([])
   useEffect(() => {
      fetch('data.json')
         .then((res) => res.json())
         .then((data) => sethomeInfo(data))
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
            data={homeInfo}
            displayConfig={{
               displayTitle: true,
               displayRating: false,
               displayInstructor: false,
               displayFee: true,
               displayButton: true,
            }}
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Our Doctors"
            data={homeInfo}
            displayConfig={{
               displayTitle: true,
               displayRating: true,
               displayInstructor: true,
               displayFee: false,
               displayButton: false,
            }}
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Gallay"
            data={homeInfo}
            displayConfig={{
               displayTitle: false,
               displayRating: false,
               displayInstructor: false,
               displayFee: false,
               displayButton: false,
            }}
         ></SelctionContainer>
      </div>
   )
}
