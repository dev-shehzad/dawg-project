import { FaLocationDot } from "react-icons/fa6";


const page = () => {
  return (
    <div className=''>
      <div className=" pt-[90px] text-[52px] tracking-wide font-[400px] font-playfair text-[#333333]  text-center  ">
        Contact
      </div>
    
      <div className=" text-[20px] font-[400px] text-[#4C5559]  w-[60%] font-sans text-center
       mx-auto pt-[30px]   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus a lectus maximus 
        tincidunt pulvinar posuere hendrerit. Nulla bibendum, orci quis accumsan.
      </div>

{/* image */}

      <div className=' flex justify-center pt-8'>
        <div className=' max-lg:w-[100%] w-[1200px] p-[30px]'>
          <div style={{backgroundImage:"url(/pic1.jpg)"}} className="  bg-top w-[100%] 
           flex items-end max-lg:flex max-md:flex max-md:justify-items-start  h-[370px] object-cover bg-cover">
          </div>
          <div className='  flex flex-col'>
                 <div className=' flex flex-row'>
{/* invisible */}
          <div className=' block max-lg:invisible ml-[60px]  max-lg:ml-[0px] max-md:ml-[0px] h-[200px] w-[600px] max-lg:w-[400px] max-md:w-[400px]
           mt-[-200px]  bg-white/60 backdrop-opacity-10  backdrop-invert  '>

              <div className=' pl-[50px] pt-[65px]  '>

                    <p className=' font-playfair font-thin text-4xl'>Blue Frenchies</p>
                    <p className=' font-extralight pt-[20px]'>1799-1701 Hillwood Dr Montgomery,</p>
                    <p className=' font-extralight'>AL 36106 USA</p>
                    <p className=' font-extralight'>TEL: +1 234 56 78 99</p>
                    <p className=' font-extralight'>CELL: +1 99 87 65 43</p>

              </div>
              <div className=' max-lg:flex max-lg:justify-center'>

                    <div className=' pl-[40px]  pt-[40px]  '>
                    <button className=' py-3 px-8 tracking-widest flex flex-row gap-2 text-xs text-white font-sans bg-[#C40101] hover:bg-black hover:text-white  '><FaLocationDot className=' text-[1rem] '   />  GOOGLE MAP </button>
                    <p className='  max-lg:text-center  text-xs tracking-wider font-sans py-[20px]'>Find us on the map, figure out directions. It&apos;s not that easy to reach us.</p>
                    </div>

              </div>
</div>
            
            <div className=' flex justify-center' >
                <img src="/pic2.jpg"
                  alt="Description of the image"
                  class="w-[270px] max-lg:w-[300px] max-md:w-[200px] max-md:bg-cover h-64 max-lg:h-64 max-md:h-44 
                    object-cover  ml-[40px] max-lg:ml-[-70px] max-md:ml-[-30px] max-sm:ml-[-50px] max-lg:mr-[280px]
                      mr-0 mt-[-100px] max-lg:mt-[-120px] max-md:mt-[-150px]  border-8 border-white  "></img>

            </div>
                    </div>
{/* visibility block */}
              <div className=' flex justify-center'>

                <div className=' invisible max-lg:visible  h-[200px] w-[600px] max-lg:w-[400px] max-md:w-[400px]'>
                   <div className='  pt-[20px]  text-center '>

                        <p className=' font-playfair font-thin text-4xl'>Blue Frenchies</p>
                        <p className=' font-extralight pt-[20px]'>1799-1701 Hillwood Dr Montgomery,</p>
                        <p className=' font-extralight'>AL 36106 USA</p>
                        <p className=' font-extralight'>TEL: +1 234 56 78 99</p>
                        <p className=' font-extralight'>CELL: +1 99 87 65 43</p>
                  </div>

                <div className=' flex justify-center'>
                    <div className=''>

                        <button className=' max-lg:ml-[110px] max-md:ml-[110px] max-sm:ml-[70px] max-md:mt-[20px] mt-[20px] py-3 px-8 tracking-widest flex flex-row gap-2 text-xs text-white font-sans bg-[#C40101] hover:bg-black hover:text-white  '><FaLocationDot className=' text-[1rem] '   />  GOOGLE MAP </button>
                        <p className=' p-[20px]  max-lg:text-center  text-xs tracking-wider font-sans'>Find us on the map, figure out directions. It&apos;s not that easy to reach us.</p>
            </div>
        </div>
    </div>
</div>
            </div>
          
      </div>

      </div>
{/* input part */}
<div className='  '> 
            <div className=' px-[280px] max-lg:px-[40px] '>

              <div className=' max-lg:text-center max-lg:pt-[120px]'>
               <p className=' font-playfair text-4xl font-extralight'>Any question? </p>
              <p className=' font-sans  pt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

          <div className=' w-[60%] max-lg:w-[80%]  pt-[50px] '>
          <div className=' text-[#4C5559] font-bold'>Name <span className=' text-red-500 text-xl'>*</span></div>
          <input type="text" name="" id=""  className=' w-[100%] hover:border-b hover:border-b-red-700   py-2 mr-10 border border-gray-200 outline-none' />


          <div className=' mt-4 text-[#4C5559] font-bold'>Contact Phone <span className=' text-red-500 text-xl'>*</span></div>
          <input type="Contact Phone" name="" id=""  className=' w-[100%] hover:border-b hover:border-b-red-700    py-2  border border-gray-200 outline-none ' />

          <div className=' mt-4 text-[#4C5559] font-bold'>Email <span className=' text-red-500 text-xl'>*</span></div>
          <input type="text" name="" id=""  className=' w-[100%]   py-2 hover:border-b hover:border-b-red-700   border border-gray-200 outline-none ' />
          
          </div>

          <div className=' '>
          <div className=' mt-4 text-[#4C5559] font-bold'>Comment or Message <span className=' text-red-500 text-xl'>*</span></div>
          <input type="text" name="" id=""  className=' w-[100%]   py-10 hover:border-b hover:border-b-red-700   border border-gray-200 outline-none ' />
          <div className=' mt-5'>

          

          <button className=' px-7 py-3 text-sm tracking-widest font-sans bg-[#C40101] hover:bg-[#264453] rounded-full  text-white '>Submit</button></div>
          
          </div>

          </div>

          </div>
    </div>
  )
}

export default page