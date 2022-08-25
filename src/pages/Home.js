import React, { useContext, useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/customPagination/Pagination";
import SearchBox from "../components/SearchBox";
import { AppContext } from "../context/Context";

// Post per page
const PageSize = 9;

const Home = () => {
  const {
    isLoading,
    totalData,
    setTotalData,
    themeMode,
    currentPage,
    setCurrentPage,
  } = useContext(AppContext);

  // setting up pages and posts per page
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentPosts = totalData.slice(firstPageIndex, lastPageIndex);

  // Searching Profiles
  const searchProfiles = (searchTxt) => {
    let newArray = totalData.filter(
      (item) => item.name.toLowerCase() == searchTxt
    );

    setTotalData(newArray);
  };

  return (
    <div
      className={`${themeMode ? "bg-white" : "bg-black-bg"} w-full h-full py-8`}
    >
      <SearchBox
        searchProfiles={searchProfiles}
        totalProfiles={totalData.length}
      />

      {isLoading && (
        <h3
          className={`py-5 ${
            themeMode ? "text-light-dark-font" : "text-white"
          } text-lg text-center`}
        >
          Loading...
        </h3>
      )}

      {!isLoading && (
        <div
          className="w-11/12 sm:w-4/5 mx-auto py-10 grid grid-cols-1 
            grid-rows-9 sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-2 
            md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-5"
        >
          {currentPosts.map((post) => (
            <Card
              key={post.id}
              name={post.name}
              location={post.location}
              gender={post.gender}
              category={post.category}
              joiningDate={post.date}
              followers={post.followers}
              url={post.url}
            />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalCount={totalData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Home;
