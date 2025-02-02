import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">FileFetch</h1>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

const DropdownBox = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="box" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {title}
      {open && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <Link key={index} to={option.link}>{option.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Home = () => (
  <main>
    <h2 className="main-heading">Welcome to FileFetch</h2>
    <div className="box-container">
      <DropdownBox title="Box 1" options={[{ label: "Option 1", link: "/option1" }, { label: "Option 2", link: "/option2" }]} />
      <DropdownBox title="Box 2" options={[{ label: "Option 3", link: "/option3" }, { label: "Option 4", link: "/option4" }]} />
    </div>
  </main>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h2>About Us</h2>} />
      <Route path="/services" element={<h2>Services</h2>} />
      <Route path="/contact" element={<h2>Contact</h2>} />
    </Routes>
  </Router>
);

export default App;
