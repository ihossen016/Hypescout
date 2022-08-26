import React, { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import FilterModal from "./FilterModal";

const SearchBox = ({ totalProfiles, searchProfiles }) => {
  const { searchText, setSearchTxt, themeMode } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    searchProfiles(searchText.toLocaleLowerCase());
  };

  return (
    <>
      <div
        className={`${
          themeMode ? "bg-component-white-bg" : "bg-component-dark-bg"
        } w-11/12 sm:w-4/5 mx-auto 
    grid md:grid-cols-6 md:grid-rows-1 grid-rows-3 grid-cols-1 items-center
    gap-3 px-6 py-4 rounded-lg`}
      >
        <span
          className={`${
            themeMode ? "text-light-dark-font" : "text-white"
          } text-lg lg:text-xl font-bold col-span-1`}
        >
          Profile ({totalProfiles})
        </span>

        <form
          onSubmit={handleFormSubmit}
          className={`${
            themeMode
              ? "text-light-dark-font "
              : "text-gray-font bg-nav-active-bg"
          } border border-gray-font 
       rounded-md p-2 text-lg sm:col-span-4 col-span-1`}
        >
          <label>
            <i className="fa-solid fa-magnifying-glass px-2"></i>
          </label>
          <input
            type="text"
            placeholder="Search Profile"
            value={searchText}
            onChange={e => setSearchTxt(e.target.value)}
            className={`bg-transparent ${
              themeMode ? "text-light-dark-font" : "text-white"
            } focus:outline-none w-4/5`}
          />
        </form>

        <button
          className="bg-btn-color text-white rounded lg:text-md 
      sm:text-sm p-2 sm:p-3 col-span-1 md:w-full w-8/12 mx-auto"
          onClick={() => {
            setShowModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          <i className="fa-solid fa-filter px-1 md:px-2"></i>Advance Filter
        </button>
      </div>

      {showModal && (
        <div className="absolute overflow-auto bg-modal-bg p-4 inset-0">
          <FilterModal handleModalClose={handleModalClose} />
        </div>
      )}
    </>
  );
};

export default SearchBox;
