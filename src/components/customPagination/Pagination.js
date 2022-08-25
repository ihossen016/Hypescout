import React, { useContext } from "react";
import { AppContext } from "../../context/Context";

// Import usePagination Hook
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const { themeMode } = useContext(AppContext);

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div
      className="w-11/12 sm:w-4/5 mx-auto flex items-center 
            justify-between gap-1"
    >
      <button
        className={`text-xs sm:text-sm md:text-base lg:text-lg ${
          themeMode
            ? "text-light-dark-font hover:text-light-gray-font"
            : "text-light-gray-font hover:text-white"
        }`}
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <i className="fa-solid fa-arrow-left pr-1 sm:pr-2"></i>
        Previous
      </button>

      <ul
        className={`${
          themeMode ? "text-light-dark-font" : "text-light-gray-font"
        } flex gap-1 sm:gap-2 items-center justify-center`}
      >
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li>&#8230;</li>;
          }

          return (
            <li
              key={pageNumber}
              className={`py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg md:py-2 md:px-4 rounded-full cursor-pointer ${
                themeMode ? "hover:text-light-gray-font" : "hover:text-white"
              } ${
                pageNumber === currentPage ? "bg-nav-active-bg text-white" : ""
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>

      <button
        className={`text-xs sm:text-sm md:text-base lg:text-lg ${
          themeMode
            ? "text-light-dark-font hover:text-light-gray-font"
            : "text-light-gray-font hover:text-white"
        }`}
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        Next
        <i className="fa-solid fa-arrow-right pl-1 sm:pl-2"></i>
      </button>
    </div>
  );
};

export default Pagination;
