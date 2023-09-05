import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewuser() {

    const [user,setuser]=useState({
        name:"",
        age:"",
        mobile:"",
        date:"",
        description:""
    })

    const{id}=useParams();

    useEffect(()=>{
        loaduser();
    },[])

    const loaduser=async()=>{
        const result=await axios.get(`http://localhost:8080/getbyid/${id}`)
        setuser(result.data)
    }



  return (
    <div style={{backgroundColor:"rgb(216, 242, 250)"}}>
       <nav className="navbar navbar-expand-lg bg-primary mb-5">
        <br />
        <br/>
        <br/>
        
        
      </nav>
    <div className="container ">
      <div className="row ">
        <div className="col-md-6 offset-md-3 border rounded p-4 mb-5 shadow ">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id :
              {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>NAME :</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>AGE :</b>
                  {user.age}
                </li>
                <li className="list-group-item">
                  <b>MOBILE :</b>
                  {user.mobile}
                </li>
                <li className="list-group-item">
                  <b>DATE :</b>
                  {user.date}
                </li>
                <li className="list-group-item">
                  <b>DESCRIPTION :</b>
                  {user.description}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2 " to={"/admin"}>Back</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
