'use client'
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import Image from "next/image";
import MobileMenu from "../mobilemenu/MobileMenu";
import { FiX } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [closedByOutsideClick, setClosedByOutsideClick] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setClosedByOutsideClick(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen || closedByOutsideClick) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      setClosedByOutsideClick(false);
    }
  };

  const handleIconClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setClosedByOutsideClick(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
    setClosedByOutsideClick(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { label: "HOME II", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR DOGS", dropdownItems: [
        { label: "DOGS PAGE", href: "/ourdogs/dogs-page" },
        { label: "LADY", href: "/ourdogs/lady" },
        { label: "SIRE", href: "/ourdogs/sire" }
      ]
    },
    { label: "BREED INFO", href: "/infobreed" },
    { label: "FAQ", href: "/faq" },
    { label: "CONTACT", href: "/contact" },
    { label: "NEWS", href: "/" },
  ];

  return (
    <div className="flex justify-center bg-main h-[150px] relative">
      <nav className="self-center w-full max-w-7xl">
        <div className="flex max-xtab:flex-col max-xtab:gap-5 justify-around items-center">
          <h1 className="uppercase pl-5 py-4 text-lg font-bold text-white">
            <Image src="/header/logo.png" alt="Logo" width={100} height={80} />
          </h1>
          <ul className="flex max-xtab:hidden items-center text-[14px] font-semibold pl-32 ">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-white hover:text-[#154B86]  transition-all ease duration-500  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5 font-barlow text-[15px] font-[400]"
              >
                {item.dropdownItems ? (
                  <div
                    className="relative flex items-center"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                  >
                    <span>{item.label}</span>
                    <FaChevronDown className="ml-1" />
                    {isDropdownOpen && (
                      <div className="absolute top-[105%] w-[200px] left-0 z-[1000] bg-black text-white shadow-md ">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <div key={index} className="px-4 py-3 hover:bg-[#154B86] cursor-pointer">
                            <Link href={dropdownItem.href}>
                              <h1 className="cursor-pointer">{dropdownItem.label}</h1>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <h1 className="cursor-pointer">{item.label}</h1>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="max-xtab:w-full flex justify-between max-xtab:px-[40px] max-md:px-[28px]">
            <div className="text-white  text-center text-base pr-5 inline-flex font-barlow text-[15px]">
              <Link href="#">
                <h1 className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-[#154B86]  transition-all ease duration-500 cursor-pointer">
                  <FaInstagram />
                </h1>
              </Link>
              <Link href="#">
                <h1 className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-[#154B86]  transition-all ease duration-500 cursor-pointer">
                  <FaFacebook />
                </h1>
              </Link>
              <Link href="#">
                <h1 className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-[#154B86]  transition-all ease duration-500 cursor-pointer">
                  <FaPinterest />
                </h1>
              </Link>
            </div>
            <div
              className="text-white hidden max-xtab:block"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX size={20} onClick={handleIconClick} /> : <FaBars size={20} onClick={handleIconClick} />}
            </div>
            {isMobileMenuOpen && (
              <div className="absolute top-[100%] left-0 z-[1000]" ref={mobileMenuRef}>
                <MobileMenu onClose={handleMobileMenuClick} /> {/* Pass onClose function */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;