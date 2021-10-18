import React from 'react'


export default function About() {
   return (
      <div className="my-5 p-4">
         <div className="row row-cols-1 row-cols-sm-2 px-5 mx-auto ">
            <div>
               <img
                  className="img-fluid"
                  src="https://pulseoutdoor.com/wp-content/uploads/2017/03/Hartlepool-OPD.jpg"
                  alt=""
                  srcset=""
               />
            </div>
            <p className="d-flex justify-content-center align-items-center">
               <p>
                  Gentle Care started its journey in June 1980 with a noble
                  vision “To serve the humanity”. The trust has agreed upon to
                  provide healthcare service to the people of Bangladesh at
                  affordable cost. At the early of its commencement, few
                  dedicated social workers of Bangladesh came together and had
                  been united with a strong determination to serve people of the
                  country, the compatriots. That ambition was materialized in
                  the form of “Ibn Sina Trust”. At the time of launching, the
                  trust was an institute of 13 employees including Physicians,
                  Technical and Administrative staffs. Over the period of time,
                  by the grace of almighty Allah Subhanahu Wa Tala, the Ibn Sina
                  Trust is now a name of ‘TRUST’ in the sector of health care in
                  Bangladesh and is one of the largest health service provider
                  in South Asia.
               </p>
            </p>
         </div>
         <div className="row row-cols-1 row-cols-sm-2 px-5 mx-auto my-4">
            <div className="d-flex justify-content-center align-items-center ">
               <div>
                  <h1 className=" pb-4 text-start">Our mission</h1>
                  <div className="">
                     <p className="text-start">
                        There are three commitments we've made to the world.
                        We've been grounded by these since day one:
                     </p>
                     <ul className="pt-2 ps-5 text-start">
                        <li>
                           Increase access to high-quality education for
                           everyone, everywhere
                        </li>
                        <li>
                           Enhance teaching and learning on campus and online
                        </li>
                        <li>Advance teaching and learning through research</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div>
               <img
                  className="img-fluid"
                  src="images/about us/2.jpg"
                  alt=""
                  srcset=""
               />
            </div>
         </div>
      </div>
   )
}
