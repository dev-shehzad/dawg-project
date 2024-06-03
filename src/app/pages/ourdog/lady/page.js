import React from 'react'

const page = () => {
  return (
    <div className=" w-full p-[80px] bg-white max-sm:p-10 cursor-pointer max-sm:w-full">
 {/* Lady  */}
 <div className=" text-[52px] font-[400px] font-serif text-[#152935]  text-center max-sm:w-full  ">
 Lady
      </div>
      {/* text paragraph1 */}
      <div className=" text-[20px] font-[400px] text-[#606064]   w-[68%] font-sans text-center mx-auto pt-[20px] max-sm:text-left max-sm:ml-1 max-sm:w-full   ">
      This is the category where all of our Ladies find their place. Dawgs and Dawg Categories work identically to WordPress Posts and Post Categories.
      </div>
       {/* flex 4pictures */}
       <div className=" flex w-full flex-wrap mt-12 gap-[60px]  justify-center  ">
        {/* image1 */}
        <div className=" w-[470px] h-[600px] ml-4 mt-[30px] max-sm:pt-[60px] max-sm:w-full ">
          <img
            src="/dg4.jpg"
           
            className=" w-[470px] h-[500px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Suzie
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Cute Rose of Rivendale
          </div>
        </div>
         {/* image2 */}
         <div className=" w-[470px] h-[600px] max-sm:mt-[60px] max-sm:w-full ">
          <img
            src="/dg3.jpg"
         
            className=" w-[470px] h-[500px] mt-[ 30px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            LeeLoo
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            LeeLoo the Fifth Element
          </div>
        </div>
         {/* image3 */}
         <div className=" w-[470px] h-[600px] max-sm:mt-[60px] max-sm:w-full">
          <img
            src="/dg2.jpg"
        
            className=" w-[470px] h-[500px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Azra
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Alita the Battle Angel
          </div>
        </div>
         {/* image4 */}
         <div className=" w-[470px] h-[600px] max-sm:mt-[40px] max-sm:w-full ">
          <img
            src="/dg1.jpg"
          
            className=" w-[470px] h-[500px] transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
          ></img>
          <div className=" text-[25px] font-[400px] font-serif text-[#152935] text-center pt-3  ">
            Adelle
          </div>
          <div className=" text-[18px] font-[300px] text-[#828286] w-[60%]  font-sans text-center mx-auto pt-1 ">
            Awsome Dunray Hunter
          </div>
        </div>

        </div>
</div>
    )
}

export default page