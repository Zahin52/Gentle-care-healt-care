import React from 'react'
import Card from '../../card/card'

export default function selctionContainer({
   sectionTitle,
   data,
   displayConfig,
}) {
   return (
      <div>
         <div className="container">
            <h1
               style={{ 'background-color': '#fc6c85' }}
               className="title fw-bold text-capitalize mt-5 mb-4 text-center rounded-pill text-white py-2 opacity-75"
            >
               {sectionTitle}
            </h1>
         </div>
         <div id="services" className=" px-4">
            <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
               {data.slice(0, 6).map((data, i) => (
                  <Card key={i} info={data} displayConfig={displayConfig} />
               ))}
            </div>
         </div>
      </div>
   )
}
