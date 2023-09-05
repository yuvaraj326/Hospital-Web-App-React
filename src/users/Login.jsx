import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    UserName: "",
    Password: "",
  });
  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const { UserName, Password } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (UserName === "admin" && Password === "pass") {
      navigate("/admin");
    } else {
      alert("incorect");
    }
  };

  return (
    <div style={{backgroundColor:"rgb(216, 242, 250)"}}>
        <nav className="navbar navbar-expand-lg bg-primary mb-5">
          <br />
          <br/>
          <br/>
        </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mb-5 shadow"  style={{backgroundColor:"darkturquoise"}}>
            <h2 className="text-center m-4">Admin Only</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="UserName" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter The Name"
                  name="UserName"
                  required
                  value={UserName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label ">
                  Password
                </label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Enter The Password"
                  name="Password"
                  required
                  value={Password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary  ">
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
export default Login
