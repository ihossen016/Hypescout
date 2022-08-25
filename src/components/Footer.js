import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Context";

const Footer = () => {
  const { themeMode } = useContext(AppContext);

  return (
    <div
      className={`w-full ${
        themeMode ? "bg-component-white-bg" : "bg-component-dark-bg"
      } pt-5`}
    >
      <div
        className="w-11/12 sm:w-4/5 mx-auto flex flex-col sm:flex-row 
          justify-between items-center md:pt-14 pt-10"
      >
        <div
          className="sm:w-[30%] sm:mt-[-10%] py-3 mx-auto sm:mx-0 
          flex flex-col items-center justify-center sm:items-start"
        >
          <Link
            to="/"
            className={`${
              themeMode ? "text-light-dark-font" : "text-white"
            } text-xl flex items-center py-4 gap-2`}
          >
            <img
              src={`../images/${themeMode ? "dark-logo" : "logo"}.png`}
              alt="logo"
            />
            hypescout
          </Link>
          <p className="text-gray-font text-sm text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet turpis magna. Pellentesque eget eros velit.
          </p>
          <div
            className={`${
              themeMode ? "text-light-dark-font" : "text-gray-font"
            } text-lg flex gap-5 items-center 
                justify-around py-8`}
          >
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>

        <div
          className=" sm:w-3/5 mx-auto grid grid-rows-4 
          grid-cols-4 grid-flow-col sm:gap-4 gap-10 sm:flex justify-between"
        >
          <div className="row-span-4 col-span-2 ...">
            <h3
              className={`${
                themeMode ? "text-light-dark-font" : "text-white"
              } font-bold text-lg py-3`}
            >
              Company
            </h3>
            <div className="text-gray-font flex flex-col gap-3">
              <a>About Us</a>
              <a>Carrers</a>
              <a>Case Study</a>
              <a>Blog</a>
              <a>Contact Us</a>
            </div>
          </div>
          <div className="row-span-2 col-span-2 ...">
            <h3
              className={`${
                themeMode ? "text-light-dark-font" : "text-white"
              } font-bold text-lg py-3`}
            >
              Influencer
            </h3>
            <div className="text-gray-font flex flex-col gap-3">
              <a>Join as Influencer</a>
              <a>HypeSocial</a>
            </div>
          </div>
          <div className="row-span-2 col-span-2 ...">
            <h3
              className={`${
                themeMode ? "text-light-dark-font" : "text-white"
              } font-bold text-lg py-3`}
            >
              Advertiser
            </h3>
            <div className="text-gray-font flex flex-col gap-3">
              <a>Join as Advertiser</a>
              <a>Hypelink</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-11/12 md:w-4/5 mx-auto text-gray-font 
          py-5 text-sm sm:text-md flex flex-col-reverse items-center 
          sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="py-3">
          <span
            className={`${themeMode ? " text-light-dark-font font-bold" : ""}`}
          >
            &copy; Hypescout 2022.
          </span>{" "}
          All rights reserved
        </p>
        <div className="flex gap-3">
          <a>Terms & Conditions</a>
          <a>Privacy</a>
          <a>Sitemap</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
