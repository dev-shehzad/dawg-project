import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaCogs, FaUserFriends, FaStroopwafel } from "react-icons/fa";
const page = () => {
  const products = [
    {
      id: 1,
      src: "/home/firstdog.jpg",
      title: "Adelle",
      category: "Awsome Dunray Hunter",
      link: "/",
    },
    {
      id: 2,
      src: "/home/secdog.jpg",
      title: "Azra",
      category: "Alita the Battle Angel",
      link: "/",
    },
    {
      id: 3,
      src: "/home/thirddog.jpg",
      title: "LeeLoo",
      category: "LeeLoo the Fifth Element",
      link: "/",
    },
    {
      id: 4,
      src: "/home/fourdog.jpg",
      title: "Suzie",
      category: "Cute Rose of Rivendale",
      link: "/",
    },
  ];
  return (
    <div>
      <div className="w-full h-[550px] bg-[url(/home/bgdog.jpg)] max-tab:bg-cover max-tab:bg-center flex flex-col max-tab:text-center items-center justify-center px-[80px] max-tab:px-[40px] max-md:px-[28px]">
        <h1
          style={{ textShadow: "1px 1px 0px #000000" }}
          className="text-[54px] max-md:text-[40px] font-playfair text-white drop-shadow-sm  "
        >
          Hello, we are the Blue Frenchies!
        </h1>
        <p
          style={{ textShadow: "1px 1px 0px #000000" }}
          className="text-[25px] max-md:text-[18px] font-playfair drop-shadow-sm text-white"
        >
          We breed awesome French Bulldogs for over 16 years.
        </p>
      </div>
      <div className=" py-6 sm:py-8 lg:py-12 relative overflow-hidden">
        <Image
          src="/home/bgall.svg"
          alt=""
          width={600}
          height={400}
          className="absolute max-md:hidden left-[35%] max-tab:left-[15%] -z-10 opacity-[0.03]"
        />
        <div className="mx-auto max-w-[1200px] w-full px-4 md:px-8 py-[50px]">
          <div className="mx-auto flex w-[80%] flex-col items-center text-center">
            <p className="mb-8 text-[19px] text-[#152935]  w-[100%] font-fira   md:mb-12">
              Speaking of Frenchies, we are definitely one of the best kennels
              in America. Our champs are born and raised in Louisiana, loving
              environment with affection and discipline
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Link
                href="#"
                className="inline-block  font-barlow rounded-[25px] bg-[#C40101] px-8 py-3 text-center text-[15px]  text-white outline-none ring-indigo-300 transition duration-100 hover:bg-black focus-visible:ring active:bg-indigo-700 "
              >
                About Us
              </Link>

              <Link
                href="#"
                className="inline-block font-barlow rounded-lg bg-transparent px-8 py-3 text-center text-sm  text-gray-500 outline-none ring-indigo-300 transition duration-100  focus-visible:ring active:text-gray-700 md:text-base"
              >
                Learn about Frenchies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="3rd max-w-[1300px] mx-auto py-[50px]  px-[80px] max-tab:px-[40px] max-md:px-[28px]">
        <div className="find flex max-md:flex-col max-md:gap-3 max-md:justify-center max-md:items-center relative">
          <div className="one w-[30%] max-md:w-full h-[300px] bg-[url(/home/sec.jpg)] bg-cover bg-center -mr-[30px] max-md:mr-auto"></div>
          <div className="two  w-[40%] max-md:w-full  h-[300px] bg-main -mt-[50px] max-md:mt-auto z-10 p-[40px] flex flex-col justify-center items-center gap-5">
            <Image src="/home/divide.svg" alt="image" width={200} height={30} />
            <h1 className="text-[23px] text-white font-playfair text-center">
              ``We don&apos;t just breed, we stand bald behind our brand.``
            </h1>
          </div>
          <div className="three w-[30%] max-md:w-full h-[300px] bg-[url(/home/third.jpg)] bg-cover bg-center -ml-[30px] max-md:ml-auto"></div>
        </div>

        <div className="blog">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className=" md:w-1/3 flex flex-col text-center items-center">
                  <div className=" inline-flex w-full gap-1 items-center justify-center rounded-full  text-[#4C5559] mb-0 flex-shrink-0">
                    <div className="line w-full bg-opacity-[0.2] h-[1px] bg-[#4C5559] "></div>
                    <FaStroopwafel className="text-[80px]" />
                    <div className="line w-full bg-opacity-[0.2] h-[1px] bg-[#4C5559] "></div>
                  </div>
                  <div className="flex-grow px-[25px]">
                    <h2 className="text-[#4C5559] text-[23px] font-playfair font-medium ">
                      Health Guarantee
                    </h2>
                    <p className="font-barlow text-[13px] text-[#4C5559] font-[500]">
                      Why is it so important?
                    </p>
                    <p className="leading-relaxed text-[17px] font-fira font-[300] mt-[20px]">
                      Phasellus id erat sed nisl congue tempus. Suspendisse
                      potenti. Nulla tincidunt velit ut consectetur accumsan.
                    </p>
                  </div>
                </div>
                <div className=" md:w-1/3 flex flex-col text-center items-center">
                  <div className=" inline-flex w-full gap-1 items-center justify-center rounded-full  text-[#4C5559] mb-0 flex-shrink-0">
                    <div className="line w-full bg-opacity-[0.2] h-[1px] bg-[#4C5559] "></div>
                    <FaStroopwafel className="text-[80px]" />
                    <div className="line w-full bg-opacity-[0.2] h-[1px] bg-[#4C5559] "></div>
                  </div>
                  <div className="flex-grow px-[25px]">
                    <h2 className="text-[#4C5559] text-[23px] font-playfair font-medium ">
                      Embark DNA Test
                    </h2>
                    <p className="font-barlow text-[13px] text-[#4C5559] font-[500]">
                      The greatest of all
                    </p>
                    <p className="leading-relaxed text-[17px] font-fira font-[300] mt-[20px]">
                      Donec et ullamcorper odio, sit amet tempus eros.
                      Suspendisse dolor sagittis libero ac venenatis lobortis.
                    </p>
                  </div>
                </div>
                <div className=" md:w-1/3 flex flex-col text-center items-center">
                  <div className=" inline-flex w-full gap-1 items-center justify-center rounded-full  text-[#4C5559] mb-0 flex-shrink-0">
                    <div className="line w-full bg-opacity-[0.2] h-[1px] bg-[#4C5559] "></div>
                    <FaStroopwafel className="text-[80px]" />
                    <div className="line w-full bg-opacity-[0.2] h-[1px] bg-[#4C5559] "></div>
                  </div>
                  <div className="flex-grow px-[25px]">
                    <h2 className="text-[#4C5559] text-[23px] font-playfair font-medium ">
                      Breeder Support
                    </h2>
                    <p className="font-barlow text-[13px] text-[#4C5559] font-[500]">
                      We are available 24/7
                    </p>
                    <p className="leading-relaxed text-[17px] font-fira font-[300] mt-[20px]">
                      Vestibulum et ultrices erat. Praesent vitae est magna. Nam
                      in est dictum, blandit sapien sed, lacinia diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="4th">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative overflow-hidden">
              <Image
                src="/home/bgall.svg"
                alt=""
                width={900}
                height={400}
                className="absolute max-md:hidden left-[10%] max-tab:left-[0%] top-[10%] -z-10 opacity-[0.03]"
              />

              <div className="text-center  w-full">
                <h1 className="title-font sm:text-4xl text-[32px] font-[400] mb-4 font-playfair  text-gray-900">
                  Proudly presenting our Champions
                </h1>
                <p className="mb-8 text-[17px] font-barlow leading-relaxed">
                  There was a long way up to the top, years long. But we finally
                  got there. Today we offer the purest blood Frenchies, crossed
                  over generations. No mistake for full blooded French Bulldog
                  at us!
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-[#C40101] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-[25px] text-[13px] font-barlow">
                    ANY QUESTIONS
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="5th">
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-[1350px] px-4 md:px-8">
              <div className="flex justify-center w-full flex-wrap gap-[40px]">
                {products.map((product) => (
                  <div key={product.id} className="w-[300px]">
                    <Link href={product.link}>
                      <h1 className="group mb-2 block h-80 overflow-hidden bg-gray-100 shadow-lg lg:mb-3">
                        <Image
                          width={300}
                          height={300}
                          src={product.src}
                          loading="lazy"
                          alt={`Product ${product.id}`}
                          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </h1>
                    </Link>

                    <div className="flex flex-col text-center">
                      <Link href="#">
                        <h1 className="text-[23px] font-playfair text-gray-800 transition duration-100 hover:text-gray-500 ">
                          {product.title}
                        </h1>
                      </Link>
                      <span className="text-gray-500 font-fira font-[300]">
                        {product.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastcomp bg-[#152935] w-full  items-center justify-center py-[50px] mb-[50px]">
        <div className="child max-w-[1350px] flex items-start justify-center max-md:flex-col  gap-[2px] mx-auto ">
          <div className="left w-[40%] max-md:w-full">
            <div className="cant w-full bg-[#ECF3EA] px-[15px] py-[25px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN INT CH
              </h3>
              <a
                className="font-Yeseva font-[400] text-[15.75px] underline hover:no-underline"
                href="#"
              >
                Mostabears Breakn Nadina Story
              </a>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CGN
              </h3>
              <Image
                width={100}
                height={100}
                src="/br.jpg"
                alt="Img"
                className="w-[160px] h-[200px] mt-[15px]"
              />
            </div>
            <div className="sec w-full h-[670px] max-md:h-auto flex flex-col justify-center bg-[#ECF3EA] px-[15px] py-[25px] mt-[2px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN INT CH
              </h3>
              <h3 className="font-Yeseva font-[400] text-[15.75px]">
                Nadina&apos;s A Tenacious Tease
              </h3>
            </div>
          </div>
          <div className="center w-[20%] max-md:w-full h-[500px] ">
            <div className="cant w-full bg-[#ECF3EA] px-[15px] py-[45px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Tasmara One Furr The Money
              </h2>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[45px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Mostabear&apos;s Calm Before AStorm
              </h2>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[25px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <a
                className="font-Yeseva font-[400] text-[15.75px] underline hover:no-underline"
                href="#"
              >
                Nadina&apos;s Y&apos;s Guy
              </a>
              <Image
                width={90}
                height={120}
                src="/hov.avif"
                alt="img"
                className="w-[85px] h-[90px] object-cover"
              />
            </div>
            <div className="cant mt-[2px] w-full h-[520px] max-md:h-fit  max-tab:h-[473px] flex flex-col justify-center bg-[#ECF3EA] px-[15px] py-[25px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h3 className="font-Yeseva font-[400] text-[15.75px] ">
                Trillium U&apos;ll Think Of Nadina
              </h3>
            </div>
          </div>
          <div className="right w-[40%]  max-md:w-full ">
            <div className="cant  w-full bg-[#ECF3EA] px-[15px] py-[20px] max-md:mt-[54px]  max-md:py-[10px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                AM CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Fyreglo&apos;s First Impressions
              </h2>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                WC JH
              </h3>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Tasmara Games People Play
              </h2>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                WC JH
              </h3>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                BIS BISS AM CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Afire&apos;s Blue Suede Shoes
              </h2>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                SDHF
              </h3>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Mostabear&apos;s Suite Flirtation
              </h2>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Flightline&apos;s Arrival At Goldpaw
              </h2>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                TD
              </h3>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CAN CH
              </h3>
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
                Nadina&apos;s Twisted Illusion
              </h2>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CGN
              </h3>
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
              CAN INT CH


              </h3>
              <a href="#" className="font-Yeseva font-[400] text-[15.75px] underline hover:no-underline">
              Mostabears Breakn Nadina Story
              </a>
              <h3 className="text-[#1A3511] font-[400] font-google text-[13.5px] ">
                CGN
              </h3>
              <Image
                width={100}
                height={100}
                src="/br.jpg"
                alt="Img"
                className="w-[160px] h-[200px] mt-[15px]"
              />
            </div>
            <div className="cant mt-[2px] w-full bg-[#ECF3EA] px-[15px] py-[20px]">
             
              <h2 className="font-Yeseva font-[400] text-[15.75px]">
              Trillium&apos;s Too Darn Hot


              </h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
