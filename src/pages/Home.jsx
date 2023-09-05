import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Add page
export default function Home() {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    age: "",
    mobile: "",
    date: "",
    description: "",
  });

  const { name, age, mobile, date, description } = user;

  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/save", user);

    alert("Registration Successful");

    navigate("/");
  };

  return (
    <div style={{backgroundColor:"rgb(216, 242, 250)"}}>
      <nav className="navbar navbar-expand-lg bg-primary mb-5">
        <br />
        <br/>
        
        
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mb-4 shadow" style={{backgroundColor:"darkturquoise"}}>
            <h2 className="text-center m-4">Add Appointment</h2>
            <form className="registrationForm" onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter The Name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Age" className="form-label ">
                  Age
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter The Age"
                  name="age"
                  required
                  value={age}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Mobile" className="form-label ">
                  Mobile
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter The Mobile Number"
                  name="mobile"
                  required
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Date" className="form-label ">
                  Date
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Enter The Date"
                  name="date"
                  required
                  value={date}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label ">
                  description
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter The description"
                  name="description"
                  required
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary ">
                Submit
              </button>
              <Link to={"/ "} className="btn btn-outline-danger mx-5">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
