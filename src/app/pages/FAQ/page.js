import Questions from '@/app/_components/FAQ/Questions/Questions'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-[20px]'>
            <div className='w-full max-w-[800px] mx-auto text-center flex-col items-center '>
          <div className='text-[48px] max-md:text-[40px] max-sm:text-[35px] font-[400] font-playfair'>
            FAQ
          </div>
      
          <div className=' text-[17px] max-md:text-[14px] font-[400] font-sans text-gray-600 py-[20px]'>
          Morbi tincidunt facilisis nisi, sit amet suscipit ante sodales non. Praesent facilisis 
          venenatis cursus. Pellentesque consectetur justo ligula, vitae viverra dolor posuere ut.
          </div>
         </div>
        <Questions/>
    </div>
  )
}

export default page