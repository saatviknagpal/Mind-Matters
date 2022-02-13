import React, { useState, useRef, useEffect, Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { links } from "./utilities/data";
import logo1 from "./utilities/logo1.svg";
import logo2 from "./utilities/logo2.svg";
import "./app.css";
import { useNavigate } from "react-router-dom";
import {
  signout,
  isAuthenticated,
} from "../../components/navbar/authHelper/Helper";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav class="border-4 border-rose-100 border-y-rose-100">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo1}
            className="logo"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <img
            src={logo2}
            className="logo"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />

          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {!isAuthenticated() && (
            <Fragment>
              <li className="mx-2">
                <Link to="/signup">
                  <FiUserPlus />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/signin">
                  <FaSignInAlt />
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="mx-2">
                <Link
                  to="/"
                  onClick={() => {
                    signout();
                  }}
                >
                  <FaSignOutAlt />
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
