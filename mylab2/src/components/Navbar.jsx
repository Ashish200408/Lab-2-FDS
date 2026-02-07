import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#f0f0f0",
        textAlign: "center"
      }}
    >
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/about" style={{ marginRight: "15px" }}>
        About
      </Link>

      {/* Contact shown in navbar only */}
      <span style={{ color: "blue", cursor: "default" }}>
        Contact
      </span>
    </nav>
  );
}

export default Navbar;
