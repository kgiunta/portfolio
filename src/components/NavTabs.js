import React from "react";
import header from "../images/header.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="fullHeader">
        <h1 className="nameKyle"> Kyle Giunta</h1>
        <ul className="nav nav-tabs">
          <motion.li
            className="nav-item nav-link-custom"
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to={"/"}
              // onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </motion.li>
          <li className="nav-item nav-link-custom">
            <Link
              to={"/portfolio/myPortfolio"}
              // onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item nav-link-custom">
            <a
              href="https://drive.google.com/file/d/1f6TUgW2-6I5E5CkfhKc92PD6r6gy85J2/view?usp=sharing"
              target="_blank"
              rel="noreferer noopener"
              // onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item nav-link-custom">
            <Link
              to={"/portfolio/contact"}
              // onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
        <img className="headerHero" src={header} alt="motivational image" />
      </div>
    </div>
  );
}

export default NavTabs;
