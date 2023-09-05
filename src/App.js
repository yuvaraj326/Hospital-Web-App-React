// !---------------------App.js
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home";
import Admin from "./users/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./users/Update";
import Viewuser from "./users/Viewuser";
import Login from "./users/Login";
import About from "./pages/About/About";
import Contact from "./pages/Contact us/Contact";
import Footer from "./pages/Footer/Footer";
// import Feedback from "./pages/Feedback/Feedback";
// import Nav from "./layout/Nav";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route exact path="/appointment" element={<Home />} />
          <Route exact path="/update/:id" element={<Update />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/view/:id" element={<Viewuser />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/feedback" element={<Feedback />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
