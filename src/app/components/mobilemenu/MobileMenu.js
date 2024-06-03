'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const MobileMenu = ({ onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

  const handleMenuItemClick = () => {
    setOpenMenu(null); // Close the open menu
    onClose(); // Call the onClose function passed as a prop
  };

  const menuItems = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "OUR DOGS", link: "#",
      subItems: [
        { title: "DOGS PAGE", link: "/ourdogs/dogs-page" },
        { title: "LADY", link: "/ourdogs/lady" },
        { title: "SIRE", link: "/ourdogs/sire" }
      ]
    },
    { title: "BREED INFO", link: "/infobreed" },
    { title: "FAQ", link: "/faq" },
    { title: "CONTACT", link: "/contact" },
    { title: "NEWS", link: "/news" },

  ];

  return (
    <div className='w-screen px-[30px] bg-main text-white '>
      <ul className='w-full flex flex-col items-center justify-center font-barlow text-[14px] font-[400]'>
        {menuItems.map((item, index) => (
          <li key={index} className='w-full py-3 border-b-[1px] border-solid border-black border-opacity-[0.3]'>
            {item.subItems ? (
              <div className='flex justify-between items-center' onClick={() => handleMenuClick(index)}>
                <h1>{item.title}</h1>
                {openMenu === index ? <FaAngleDown /> : <FaAngleRight />}
              </div>
            ) : (
              <Link href={item.link} passHref>
                <h1 className='flex justify-between items-center' onClick={item.title !== "OUR DOGS" ? handleMenuItemClick : null}>
                  <h1>{item.title}</h1>
                  <FaAngleRight />
                </h1>
              </Link>
            )}
            {openMenu === index && item.subItems && (
              <ul className="pl-4 font-lora font-[400]">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-3">
                    <Link href={subItem.link} passHref>
                      <h1 onClick={handleMenuItemClick}>{subItem.title}</h1>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;