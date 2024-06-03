// components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaReddit, FaPinterest, FaQuora } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-main py-[100px]">
      <div className="m-2 max-w-5xl items-center">
        <div className="flex flex-col items-center ">
          <Image className="flex m-1" src="/header/logo.png" alt='Logo' width={200} height={180}/>
          <div className="m-2 flex gap-2 mt-[50px] max-md:text-[13px]">
            <Link href="#" className=" flex items-center justify-center  text-center w-[30px] h-[30px] bg-[#CCD5D2] rounded-[50%]  text-[#4C5559] hover:text-black ">
              <FaFacebook />
            </Link>
            <Link href="#" className=" flex items-center justify-center  text-center w-[30px] h-[30px] bg-[#CCD5D2] rounded-[50%]  text-[#4C5559] hover:text-black  ">
              <FaTwitter  />
            </Link>
            <Link href="#" className=" flex items-center justify-center  text-center w-[30px] h-[30px] bg-[#CCD5D2] rounded-[50%]  text-[#4C5559] hover:text-black  ">
              <FaReddit />
            </Link>
           
            <Link href="#" className=" flex items-center justify-center  text-center h-[30px] bg-[#CCD5D2] rounded-[15px] px-[10px] text-[#4C5559] hover:text-black ">
            CALL: +1 2345 678 90
            </Link>
          </div>
          <div className="flex md:flex-row flex-col">
            <p className=" text-white font-medium max-md:text-[13px] text-center m-2">
             369 - 963 Some Dr. Awesomeness, ZX 98765 USA // whatever@wherever.co.cx
            </p>
           
          </div>
          <div className="text-gray-500 font-medium max-md:text-[9px] text-center mt-6 text-xs">
          COPYRIGHT PROGRAMMIC HUB © 2024 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;