import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <a className="nav-link">
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
