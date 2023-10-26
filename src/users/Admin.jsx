import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Admin() {
  const { id } = useParams();
  const [user, setuser] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get("http://localhost:8080/getall");
    setuser(result.data);
  };

  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loaduser();
  };

  return (
    <section style={{backgroundColor:"rgb(216, 242, 250)"}}>
      <nav className="navbar navbar-expand-lg bg-primary mb-3">
        
        <br/>
        <br/>
      </nav>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Mobile</th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Contoller</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {user.id}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.mobile}</td>
                  <td>{user.date}</td>
                  <td>{user.description}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/view/${user.id}`}
                    >
                      view
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/update/${user.id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteuser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
