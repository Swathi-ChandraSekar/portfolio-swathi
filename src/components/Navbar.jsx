import  resume  from "../assets/resume.pdf";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Swathi
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#technologies">Skills</a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
              >
                <i className="bi bi-linkedin me-1"></i>
                LinkedIn
              </a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
