import React from 'react'


export default function About() {
   return (
      <div>
         <div
            className="row row-cols-1 row-cols-sm-2 px-5 mx-auto justify-content-center align-items-center"
            style={{ 'min-height': 'calc(100vh - 292px)' }}
         >
            <p className="d-flex justify-content-center align-items-center h-100">
               Skill Booster partners with more than 200 leading universities
               and companies to bring flexible, affordable, job-relevant online
               learning to individuals and organizations worldwide. We offer a
               range of learning opportunities—from hands-on projects and
               courses to job-ready certificates and degree programs.
            </p>
            <div className="h-100">
               <img
                  className="img-fluid "
                  src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268"
                  alt=""
               />
            </div>
         </div>
      </div>
   )
}
