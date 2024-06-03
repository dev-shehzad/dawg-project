import React from 'react'

const AnyQuestion = () => {
  return (
    <div className='w-full max-w-[900px] mx-auto my-[7%]'>
            <div className="bg-[url('/question.jpg')] p-[70px] max-md:p-[30px] flex flex-col max-md:text-center justify-center max-md:items-center w-full bg-cover h-[350px] relative ">
                 <div className='text-[35px] text-white max-md:text-[30px] max-sm:text-[25px]font-[400] font-fira'>
                 Any questions beside these?
                 </div>
                 <div className='text-[16px] max-md:text-[14px] py-2 text-gray-200 '>
                 Quisque bibendum est volutpat vulputate sagittis. Duis euismod est maximus augue nec 
                 porta. Duis euismod in augue nec porta. Suspendisse nisl eros.
                 </div>
                 <div className='w-[130px] h-[50px] font-[400] font-fira rounded-[50px] cursor-pointer transition-[0.1s] ease-in-out my-6 bg-red-600 hover:bg-gray-950 text-white text-[12px] flex justify-center items-center'>
                  Contact Us #
                </div>
            </div>
    </div>
  )
}

export default AnyQuestion