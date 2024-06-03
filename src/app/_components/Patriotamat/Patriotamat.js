"use client";
import Link from "next/link";
import React from "react";

const Patriotamat = () => {
  const news = [
    {
      id: 1,
      img: "/patriot.jpg",
      date: "March 31, 2021",
      des: "Mauris sit amet ornare mauris, nec accumsan diam. Ut enim purus, rhoncus at laoreet in, condimentum a nisl. Mauris at congue urna, sit amet varius ipsum.",
    },
    {
      id: 2,
      img: "/patriot2.jpg",
      date: "March 21, 2021",
      des: "Aenean vitae fringilla orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus rhoncus metus, lacinia tincidunt ligula tempor quis.",
    },
    {
      id: 3,
      img: "/patriot3.jpg",
      date: "February 17, 2021",
      des: " Mauris felis eros, elementum nec ligula quis, maximus pellentesque velit. Sed tempor elit sit amet varius pretium. Maecenas ultricies vulputate arcu sit amet tristique. Integer eu neque ligula.",
    },
    {
      id: 4,
      img: "/patriot4.jpg",
      date: "February 8, 2021",
      des: "Praesent accumsan fermentum dui sit amet vestibulum. Nulla porttitor auctor pretium. Curabitur consectetur sapien eros, et semper magna gravida nec. Nunc nisl lectus, auctor sed elementum sit amet, blandit eu neque. ",
    },
    {
      id: 5,
      img: "/patriot5.jpg",
      date: "January 16, 2021",
      des: "Vestibulum aliquet ut mi rhoncus laoreet. Proin molestie porta tellus et congue. In auctor est enim, quis porttitor augue pharetra in. Praesent volutpat tortor sem, quis faucibus velit viverra ac.",
    },
  ];
  return (
    <div className="w-full">
      {news.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full max-w-[1100px] mx-auto flex flex-col items-center"
          >
            <div className="w-full relative overflow-hidden cursor-pointer">
              <img
                src={item.img}
                className="w-full mt-[8%] transform hover:scale-[1.05] hover:opacity-[0.9] transition-[0.1s] ease"
              />
            </div>
            <div className="text-[16px] font-[400] text-gray-700 font-playfair pt-5 object-cover">
              {item.date}
            </div>
            <div className="text-[48px] text-gray-800 max-md:text-[40px] max-sm:text-[35px] font-[400] font-playfair hover:opacity-[0.5] cursor-pointer transition-[0.1s] ease-in-out">
              Patriotamat Locakzp
            </div>
            <div className="text-[17px] max-md:text-[14px] font-[400] font-sans py-3 text-gray-600 text-center">
              {item.des}
            </div>
            <div className="w-[130px] h-[45px] font-[400] font-fira rounded-[50px] cursor-pointer transition-[0.1s] ease-in-out my-3 bg-red-600 hover:bg-gray-950 hover:text-gray-300 text-white text-[12px] flex justify-center items-center">
              READ MORE
            </div>
          </div>
        );
      })}
      {/* <div className='w-full flex justify-center gap-1 my-[7%]'>
          <button className='px-5 py-4 hover:text-white hover:bg-gray-800 bg-gray-100 text-gray-800 text-sm cursor-pointer transition-[0.1s] ease-in-out'>1</button>
          <button className='px-5 py-4 hover:text-white hover:bg-gray-800 bg-gray-100 text-gray-800 text-sm cursor-pointer transition-[0.1s] ease-in-out'>2</button>
          <button className='px-5 py-4 hover:text-white hover:bg-gray-800 bg-gray-100 text-gray-800 text-sm cursor-pointer transition-[0.1s] ease-in-out'>Next</button>

          </div> */}

      {/* <div className="flex justify-between my-4">
        {Patriotamat && (
          <Link To={Patriotamat}>
            <a className="px-4 py-2 bg-blue-500 text-white rounded">Previous</a>
          </Link>
        )}
        {NextPatriotamat && (
          <Link To={NextPatriotamat}>
            <a className="px-4 py-2 bg-blue-500 text-white rounded">Next</a>
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default Patriotamat;
