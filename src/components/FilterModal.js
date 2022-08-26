import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const FilterModal = ({ handleModalClose }) => {
  const { themeMode } = useContext(AppContext);

  return (
    <div
      className={`max-w-sm ml-auto sm:mr-20 md:mr-24 lg:mr-32 
     p-6 relative top-72 md:top-48 ${
       themeMode ? "bg-component-white-bg" : "bg-component-dark-bg"
     }`}
    >
      <form className={`${themeMode ? "text-light-dark-font" : "text-white"}`}>
        <header className="text-lg font-semibold pb-3">Filter Options</header>
        <p className="py-3 font-light text-base">Influencer's Industry</p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${
            themeMode
              ? "bg-white text-light-dark-font"
              : "bg-black text-gray-font"
          }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option value="Bangladesh">Food</option>
          <option value="Bangladesh">Model</option>
          <option value="Bangladesh">Fashion</option>
        </select>
        <p className="py-3 font-light text-base">Influencer's Country</p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${
            themeMode
              ? "bg-white text-light-dark-font"
              : "bg-black text-gray-font"
          }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Bangladesh">India</option>
        </select>
        <p className="py-3 font-light text-base">Audience's Country</p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${
            themeMode
              ? "bg-white text-light-dark-font"
              : "bg-black text-gray-font"
          }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Bangladesh">India</option>
        </select>
        <p className="py-3 font-light text-base">
          Influencer's Social Media Platform
        </p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${
            themeMode
              ? "bg-white text-light-dark-font"
              : "bg-black text-gray-font"
          }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option value="Bangladesh">Facebook</option>
          <option value="Bangladesh">Instgram</option>
          <option value="Bangladesh">LinkedIn</option>
          <option value="Bangladesh">TikTok</option>
        </select>

        <p className="py-3 font-light text-base">Influencer's Gender</p>
        <div className="w-3/5 flex items-center justify-around">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            className="w-5 h-5"
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            className="w-5 h-5"
          />
          <label for="female">Female</label>
        </div>

        <div className="w-full flex justify-end gap-3 py-4">
          <button
            onClick={handleModalClose}
            className={`${
              themeMode ? "bg-white" : "bg-black"
            } text-gray-font p-3 rounded-md`}
          >
            Close
          </button>
          <button
            onClick={handleModalClose}
            className="bg-btn-color text-white p-3 rounded-md"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterModal;
