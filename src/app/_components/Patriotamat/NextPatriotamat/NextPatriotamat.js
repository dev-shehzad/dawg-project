"use client";
import React from "react";

const NextPatriotamat = () => {
  const Patriotamat = null;
  const NextPatriotamat = "/NextPatriotmat";

  const news = [
    {
      id: 6,
      img: "/patriot6.jpg",
      date: "January 14, 2021",
      des: "Pellentesque sed mauris eget lectus dictum commodo in in justo. Aliquam ornare augue vel quam varius, vel finibus justo tincidunt. Curabitur id tincidunt lacus. Nunc vitae nunc vel risus rutrum convallis.",
    },
  ];
  return (
    <div className="w-full">
      {news.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full max-w-[1100px] mx-auto flex flex-col items-center"
          >
            <div className="w-full relative overflow-hidden cursor-pointer">
              <img
                src={item.img}
                className="w-full mt-[8%] transform hover:scale-[1.05] hover:opacity-[0.9] transition-[0.1s] ease"
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
            {/* <Pagination Patriotamat={Patriotamat} NextPatriotamat={NextPatriotamat} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default NextPatriotamat;
