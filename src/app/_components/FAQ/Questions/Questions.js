import React from 'react'
import AnyQuestion from './AnyQuestion'

const Questions = () => {
  const questions = [
    {   
        id:1,
        name:"Donec pulvinar posuere hendrerit?",
        des:"Morbi tincidunt facilisis nisi, sit amet suscipit ante sodales non. Praesent facilisis venenatis cursus. Pellentesque consectetur justo ligula, vitae viverra dolor posuere ut. Donec pulvinar posuere hendrerit. Ut vel ante nisl. Nulla bibendum, orci quis accumsan rhoncus, dui quam mollis nisl, eu ullamcorper justo massa ut dui. Duis lorem neque, tincidunt id urna ut, faucibus imperdiet nisi.",
    },
    {   
        id:2,
        name:"Duis elementum arcu id dui viverra, nec aliquam est fermentum eleifend gravida leo non iaculis?",
        des:"Aliquam euismod nisl vitae pulvinar vulputate. Etiam porttitor mauris id dui auctor consectetur. Morbi fringilla est eget porttitor lacinia. Proin quam risus, consequat et lacus non, laoreet efficitur ex. Ut vitae est bibendum, commodo elit non, interdum lacus. Curabitur aliquam varius volutpat. Integer ante magna, mollis non blandit in, cursus non sem. Vestibulum ut dictum elit. Ut ac nisl sit amet magna laoreet laoreet. ",
    },
    {   
        id:3,
        name:"Nam maximus eros ipsum, rhoncus vehicula eros ultricies vitae?",
        des:"Etiam a magna eget diam pretium placerat ac quis arcu. Vestibulum ut justo justo. Nam maximus eros ipsum, rhoncus vehicula eros ultricies vitae. Nulla interdum ipsum ut ipsum malesuada aliquet. Sed ultricies ligula porttitor sapien dignissim blandit.",
    },
    {   
        id:4,
        name:"Aliquam euismod nisl vitae pulvinar?",
        des:"Proin quam risus, consequat et lacus non, laoreet efficitur ex. Ut vitae est bibendum, commodo elit non, interdum lacus. Curabitur aliquam varius volutpat. Integer ante magna.",
    },
    {   
        id:5,
        name:"Praesent ultrices, odio in rutrum ornare, augue velit gravida leo?",
        des:"Ut luctus sapien justo, et posuere turpis volutpat a. Vestibulum interdum arcu sit amet elit fringilla, at euismod elit commodo. Nullam semper libero a ligula lacinia bibendum. Phasellus vehicula leo sodales, tempus lectus eget, semper ante. Aliquam euismod nisl vitae pulvinar vulputate",
    },
  
]
  return (
    <div className='w-full my-[10%]'>
      {questions.map((item)=>{
        return (
          <div key={item.id} className='w-full max-w-[900px] mx-auto flex flex-col items-center'>
             <div className='text-[35px] text-gray-800 max-md:text-[30px] max-sm:text-[25px] text-center font-[400] font-fira'>
              {item.name}
             </div>
             <div className='text-[17px] max-md:text-[14px] font-sans py-5 text-gray-600 text-center'>{item.des}</div>
            <div className='w-full flex my-[50px]'>
              <div className='w-[425px] h-[1px] bg-black'></div>
              <div className='w-[24px] mx-5 gap-[2px] flex'>
              <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
              <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
              <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
              </div>
              <div className='w-[425px] h-[1px] bg-black'></div>
            </div>
        </div>
        )      
      })}
      <AnyQuestion/>
    </div>
  )
}

export default Questions