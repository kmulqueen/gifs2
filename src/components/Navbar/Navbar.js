import React from "react";


const Navbar = () => (


  <nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand col-4" href="#">User Name/Image</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse row col-8" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item active ">
          <a className="nav-link" href="#">Register<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>

);
export default Navbar;