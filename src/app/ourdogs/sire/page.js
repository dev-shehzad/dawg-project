import React from "react";

const page = () => {
  return (
    <div className=" w-full p-[80px] bg-white max-sm:p-10 cursor-pointer max-sm:w-full max-w-[1240px] mx-auto">
      {/* Sire  */}
      <div className=" text-[52px] font-[400px] font-serif text-[#152935]  text-center max-sm:w-full  ">
        Sire
      </div>
      {/* text paragraph1 */}
      <div className=" text-[20px] font-[400px] text-[#606064]   w-[68%] font-sans text-center mx-auto pt-[20px] max-sm:text-left max-sm:ml-1 max-sm:w-full   ">
        This is the category where all of our Bois find their place. Dawgs and
        Dawg Categories work <br className="max-tab:hidden" /> identically to
        WordPress Posts and Post Categories.
      </div>
      {/* flex 2pictures */}
      <div className=" flex w-full flex-wrap mt-12 gap-[60px]  justify-center  ">
        {/* image1 */}
        <div className=" w-[470px] h-[600px] max-sm:mt-[60px] max-sm:w-full ">
          <img
            src="/dg5.jpg"
            className=" w-[470px] h-[500px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Bronco
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Horny Butter Bread
          </div>
        </div>
        {/* image2 */}
        <div className=" w-[470px] h-[600px] max-sm:mt-[60px] max-sm:w-full">
          <img
            src="/dg5.jpg"
            className=" w-[100%] h-[500px]  transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className="  text-[25px] font-[400px] font-serif text-[#152935] text-center   ">
            Mischa
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Buzz the Lightyear
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
