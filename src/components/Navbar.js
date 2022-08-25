import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Context";

const Navbar = () => {
  const { themeMode, setThemeMode, fetchData, setSearchTxt, setCurrentPage } =
    useContext(AppContext);

  const [isMobile, setIsMobile] = useState(false);

  // Navlinks States
  const [linkOneState, setLinkOneState] = useState(true);
  const [linkTwoState, setLinkTwoState] = useState(false);
  const [linkThreeState, setLinkThreeState] = useState(false);
  const [linkFourState, setLinkFourState] = useState(false);

  // Navlinks State update
  const linkStateUpdate = (one, two, three, four) => {
    setLinkOneState(one);
    setLinkTwoState(two);
    setLinkThreeState(three);
    setLinkFourState(four);
  };

  return (
    <div
      className={`w-full ${
        themeMode ? "bg-component-white-bg" : "bg-component-dark-bg"
      }`}
    >
      <div className="main-nav mx-auto w-11/12 sm:w-4/5 h-20 flex items-center justify-between">
        <Link
          to="/"
          // Get Previous Data
          onClick={() => {
            fetchData();
            setSearchTxt("");
            setCurrentPage(1);
          }}
          className={`${
            themeMode ? "text-light-dark-font" : "text-white"
          } text-lg flex items-center gap-2`}
        >
          <img
            src={`../images/${themeMode ? "dark-logo" : "logo"}.png`}
            alt="logo"
          />
          hypescout
        </Link>

        <ul className="navlinks flex gap-4 text-gray-font">
          <li
            // Get Previous Data
            onClick={() => {
              linkStateUpdate(true, false, false, false);
              fetchData();
              setSearchTxt("");
              setCurrentPage(1);
            }}
          >
            <Link
              to="/"
              className={`px-3 py-2 rounded ${linkOneState ? "active" : ""}`}
            >
              Dashboard
            </Link>
          </li>
          <li onClick={() => linkStateUpdate(false, true, false, false)}>
            <Link
              to="/campaign"
              className={`px-3 py-2 rounded ${linkTwoState ? "active" : ""}`}
            >
              Campaign
            </Link>
          </li>
          <li onClick={() => linkStateUpdate(false, false, true, false)}>
            <Link
              to="/hypesocial"
              className={`px-3 py-2 rounded ${linkThreeState ? "active" : ""}`}
            >
              Hypesocial
            </Link>
          </li>
          <li onClick={() => linkStateUpdate(false, false, false, true)}>
            <Link
              to="/insights"
              className={`px-3 py-2 rounded ${linkFourState ? "active" : ""}`}
            >
              Insights
            </Link>
          </li>
        </ul>

        <div className="user text-xl text-gray-font flex items-center gap-4">
          <i
            className={`fa-solid fa-bell ${
              themeMode ? "hover:text-light-dark-font" : "hover:text-white"
            }  cursor-pointer`}
          ></i>

          <i
            className={`fa-solid fa-${
              themeMode
                ? "sun hover:text-light-dark-font"
                : "moon hover:text-white"
            } cursor-pointer`}
            onClick={() => setThemeMode(!themeMode)}
          ></i>
          <span className="text-white flex gap-2 items-center">
            <span
              className={`${
                themeMode ? "text-light-dark-font" : "text-white"
              } userName text-lg`}
            >
              Hi, Rakib
            </span>
            <img src="../images/person.png" alt="person" />
          </span>
          <i
            className={`fa-solid fa-${!isMobile ? "bars" : "xmark"} 
            ${themeMode ? "hover:light-dark-font" : "hover:text-white"}
            lg:hidden cursor-pointer`}
            onClick={() => setIsMobile(!isMobile)}
          ></i>
        </div>
      </div>

      {isMobile && (
        <div className="mobile-nav lg:hidden w-11/12 sm:w-4/5 mx-auto py-2">
          <ul className="mobileNavlinks text-gray-font flex flex-col gap-y-3 items-center justify-center">
            <li
              // Get Previous Data
              onClick={() => {
                linkStateUpdate(true, false, false, false);
                fetchData();
                setSearchTxt("");
              }}
            >
              <Link
                to="/"
                className={`px-3 py-2 rounded ${linkOneState ? "active" : ""}`}
              >
                Dashboard
              </Link>
            </li>
            <li onClick={() => linkStateUpdate(false, true, false, false)}>
              <Link
                to="/campaign"
                className={`px-3 py-2 rounded ${linkTwoState ? "active" : ""}`}
              >
                Campaign
              </Link>
            </li>
            <li onClick={() => linkStateUpdate(false, false, true, false)}>
              <Link
                to="/hypesocial"
                className={`px-3 py-2 rounded ${
                  linkThreeState ? "active" : ""
                }`}
              >
                Hypesocial
              </Link>
            </li>
            <li onClick={() => linkStateUpdate(false, false, false, true)}>
              <Link
                to="/insights"
                className={`px-3 py-2 rounded ${linkFourState ? "active" : ""}`}
              >
                Insights
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
