import React from "react";

const page = () => {
  return (
    <div className=" w-full p-[80px] bg-white max-sm:p-10 cursor-pointer max-sm:w-full max-w-[1440px] mx-auto">
      {/*  our dogs */}
      <div className=" text-[52px] font-[400px] font-serif text-[#152935]  text-center max-sm:w-full  ">
        Our Dogs
      </div>
      {/* text paragraph1 */}
      <div className=" text-[20px] font-[400px] text-[#606064]   w-[68%] font-sans text-center mx-auto pt-[20px] max-sm:text-left max-sm:ml-1 max-sm:w-full   ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus
        a lectus maximus tincidunt pulvinar posuere hendrerit. Nulla bibendum,
        orci quis accumsan.
      </div>
      {/* our ladies */}
      <div className=" text-[35px] font-[400px] font-serif text-[#152935] text-center  mt-[90px] max-sm:ml-1">
        Ladies first
      </div>
      {/*text paragraph2  */}
      <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-[20px] max-sm:text-left max-sm:ml-1 max-sm:w-full ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </div>
      {/* flex 4pictures */}
      <div className=" flex w-full flex-wrap mt-10 gap-[40px]  justify-center  ">
        {/* image1 */}
        <div className=" w-[350px] h-[400px] max-sm:mt-[40px] max-sm:w-full ">
          <img
            src="/dg1.jpg"
            width={350}
            className=" h-[350px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          />
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Adelle
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Awsome Dunray Hunter
          </div>
        </div>
        {/* image2 */}
        <div className=" w-[350px] h-[400px] max-sm:mt-[60px] max-sm:w-full">
          <img
            src="/dg2.jpg"
            width={350}
            className=" h-[350px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          />
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Azra
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Alita the Battle Angel
          </div>
        </div>
        {/* image3 */}
        <div className=" w-[350px] h-[400px]  max-sm:mt-[60px] max-sm:w-full ">
          <img
            src="/dg3.jpg"
            width={350}
            className=" object-cover h-[350px]  object-cover transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          />
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            LeeLoo
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            LeeLoo the Fifth Element
          </div>
        </div>
        {/* image4 */}
        <div className=" w-[350px] h-[400px] ml-4 mt-[30px] max-sm:pt-[60px] max-sm:w-full ">
          <img
            src="/dg4.jpg"
            width={350}
            className=" h-[350px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          />
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Suzie
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Cute Rose of Rivendale
          </div>
        </div>
      </div>
      {/* Now the bois */}
      <div className=" text-[35px] font-[400px] font-serif text-[#152935] text-center  mt-[10%] max-sm:pt-[30%] max-sm:w-full ">
        Now the bois
      </div>
      {/*text paragraph3  */}
      <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-[20px] max-sm:text-left max-sm:ml-1 max-sm:w-full ">
        orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </div>
      {/* flex 2pictures */}
      <div className=" flex w-full flex-wrap  mt-12 gap-[40px] h-auto justify-center mb-[5%] ">
        {/* image5 */}
        <div className=" w-[350px] h-[400px] max-sm:mt-[60px] max-sm:w-full ">
          <img
            src="/dg5.jpg"
            width={350}
            className=" h-[350px] object-fill  transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Bronco
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Horny Butter Bread
          </div>
        </div>
        {/* image6 */}
        <div className=" w-[350px] h-[400px] max-sm:mt-[60px] max-sm:w-full">
          <img
            src="/dg6.jpg"
            width={350}
            className=" h-[350px] object-fill object-cover transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
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
