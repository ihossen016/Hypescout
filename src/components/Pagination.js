import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  // Pagenumbers Array
  let pageNumbers = [];

  // Go back to Previous Page
  const prevPage = num => {
    if (num > 1) {
      setCurrentPage(num - 1);
    }
  };

  // Go to Next Page
  const nextPage = num => {
    if (num < pageNumbers.length) {
      setCurrentPage(num + 1);
    }
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      className="text-gray-font w-11/12 sm:w-4/5 mx-auto cursor-pointer
        grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 grid-rows-1 
        items-center gap-2 sm:gap-4"
    >
      <div
        className="col-span-1 hover:text-white"
        onClick={() => prevPage(currentPage)}
      >
        <i className="fa-solid fa-arrow-left pr-1 sm:pr-2"></i>
        <span>Previous</span>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center">
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${page == currentPage ? "activePage" : ""} 
                text-xs md:text-base mx-1 py-1 md:py-2 px-2 md:px-3 lg:px-4 
                rounded-full hover:text-white`}
          >
            {page}
          </button>
        ))}
      </div>

      <div
        className="col-span-1 hover:text-white text-right cursor-pointer"
        onClick={() => nextPage(currentPage)}
      >
        <span>Next</span>
        <i className="fa-solid fa-arrow-right pl-1 sm:pl-2"></i>
      </div>
    </div>
  );
};

export default Pagination;
