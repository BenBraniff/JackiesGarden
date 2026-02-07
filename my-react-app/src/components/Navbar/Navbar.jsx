import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // 'X' for the close button
import "./Menu.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      {/* This button stays visible on all pages */}
      <div
        className="menu-trigger"
        onClick={toggleMenu}
        style={{
          cursor: "pointer",
          position: "fixed",
          zIndex: 1000,
          top: "20px",
          right: "20px",
        }}
      >
        {isOpen ? (
          <X size={40} color="white" />
        ) : (
          <Menu size={40} color="white" />
        )}
      </div>

      {/* The Full-Screen Menu */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <Link to="/" className="menu-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/store" className="menu-link" onClick={toggleMenu}>
          Store
        </Link>
        <Link to="/map" className="menu-link" onClick={toggleMenu}>
          Map
        </Link>
        <Link to="/about" className="menu-link" onClick={toggleMenu}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
