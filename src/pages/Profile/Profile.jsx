// import axios from 'axios'
// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// //pofile page
// export default function Profile() {

// let navigate=useNavigate()

//   const [user,setuser]=useState({
//     email:"",
//     password:""
//   })

//   const{email,password}=user

//   const onInputChange = (e) => {
//     setuser({...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.call("http://localhost:8080/saveProduct",user)
//     navigate("/")

//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Log in User</h2>
//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Email
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter The Name"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Password" className="form-label ">
//                 Password
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter The Price"
//                 name="password"
//                 value={password}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <button type="submit" className="btn btn-outline-primary  ">
//               Submit
//             </button>
//             <Link to={"/ "} className="btn btn-outline-danger mx-5">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import About from "../About/About";
// import Appointment from '../images/appointment.jpg'
import Contact from '../Contact us/Contact';
import Feedback from "../Feedback/Feedback";
import Header from "./Header";
import Testimonials from "../Testimonials/Testimonials";

export default function Profile() {
  // const styl = { width: "100%" };
  return (
    <div id="#">
      <div className="img">
        {/* <img style={styl} src={Appointment} alt="img" /> */}
        <Header />
        <About/>
        <Testimonials/>
        <Contact/>
        <Feedback />

      </div>
      
    </div>
  );
}
