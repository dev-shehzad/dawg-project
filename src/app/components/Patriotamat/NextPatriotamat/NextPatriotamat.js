"use client";
import React, { useState } from "react";

const NextPatriotamat = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const news = [
    {
      id: 6,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "Pellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
    {
      id: 1,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "sasaellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
    {
      id: 4,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "Pellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
    {
      id: 6,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "Pellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
    {
      id: 1,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "Pellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
    {
      id: 4,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "Pellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
  ];

  const itemsPerPage = 1;
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);

  return (
    <div className="w-full my-[30px] max-w-[1140px] mx-auto px-[80px] max-tab:px-[40px] max-md:px-[28px]">
      {currentNews.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-[1100px] mx-auto flex flex-col items-center"
        >
          <div className="w-full relative overflow-hidden cursor-pointer">
            <img
              src={item.img}
              className="w-full mt-[8%] transform hover:scale-[1.05] hover:opacity-[0.9] transition-[0.1s] ease"
              alt="News Image"
            />
          </div>
          <div className="text-[16px] font-[400] text-gray-700 font-playfair pt-5 object-cover">
            {item.date}
          </div>
          <div className="text-[48px] text-gray-800 max-md:text-[40px] max-sm:text-[35px] font-[400] font-playfair hover:opacity-[0.5] cursor-pointer transition-[0.1s] ease-in-out">
            Patriotamat Locakzp
          </div>
          <div className="text-[17px] max-md:text-[14px] font-[400] font-sans py-3 text-gray-600 text-center">
            {item.des}
          </div>
          <div className="w-[130px] h-[45px] font-[400] font-fira rounded-[50px] cursor-pointer transition-[0.1s] ease-in-out my-3 bg-red-600 hover:bg-gray-950 hover:text-gray-300 text-white text-[12px] flex justify-center items-center">
            READ MORE
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-[50px]">
        {currentPage > 1 && (
          <div
            className="mx-2 cursor-pointer px-[20px] py-[10px] bg-[#F5F5F5] "
            onClick={handlePrevPage}
          >
            Previous
          </div>
        )}
        {currentPage > 2 && (
          <div
            className="mx-2 cursor-pointer px-[20px] py-[10px] bg-[#F5F5F5]"
            onClick={() => setCurrentPage(1)}
          >
            1
          </div>
        )}

        <div className="mx-2 px-[20px] py-[10px] bg-[#F5F5F5]">
          {currentPage}
        </div>
        {currentPage < totalPages && (
          <div
            className="mx-2 cursor-pointer px-[20px] py-[10px] bg-[#F5F5F5]"
            onClick={handleNextPage}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default NextPatriotamat;
