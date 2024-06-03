import React from "react";
import { FaShieldDog } from "react-icons/fa6";
import { FaWeight } from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";
import { LuHeartPulse } from "react-icons/lu";

const page = () => {
  return (
    <div className="w-full p-[50px] bg-white  max-md:p-[28px] cursor-pointer max-w-[1140px] mx-auto mt-[50px]">
      {/* breed info */}
      <div className=" text-[52px] font-[400px] font-serif text-[#152935]  text-center max-sm:w-full  ">
        Breed Info
      </div>
      {/* text paragraph1 */}
      <div className=" text-[20px] font-[400px] text-[#152935]  w-[60%] font-sans text-center mx-auto pt-[20px] max-sm:text-left max-sm:ml-1 max-sm:w-full   ">
        he French Bulldog is a companion dog. The breed is small and muscular
        with heavy bone structure, a smooth coat, a short face and trademark
        “bat” ears. Prized for its affectionate nature and balanced disposition,
        they are generally active and alert, but not unduly boisterous.
      </div>
      {/* big dog image */}
      <img
        src="/image1.jpg "
        width={1400}
        className=" bg-cover object-cover mx-auto h-[400px] mt-[50px] md:p-[50px]"
      ></img>
      {/* personality expectation */}
      <div className=" text-[35px] font-[400px] font-serif text-[#152935] ml-[13%] mt-[20px] max-sm:ml-1">
        Personality & Expectations
      </div>
      {/* text pargraph2 */}
      <div className=" text-[18px] font-[400px] text-[#454546]  font-sans   ml-[13%] w-[78%] max-sm:ml-1 max-sm:w-full ">
        Pellentesque consectetur justo ligula, vitae viverra dolor posuere ut.
        Donec pulvinar posuere hendrerit. Nulla bibendum, orci quis accumsan
        rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        ac purus a lectus maximus tincidunt.
      </div>
      {/*icons  */}

      <div className="flex  mt-[50px] items-center">
        <div className="border-b border-black border-solid w-[170px] ml-[7%] "></div>
        <div className="ml-[10px]">
          <div>
            <div className="text-[35px] text-black pt-[50px]">
              <FaWeight />
            </div>
            <div className="text-[18px] font-[400px] text-[#4C5559] font-sans pt-1">
              Weight
            </div>
            <div className="text-[12px] font-[700px] text-[#363636] font-sans pt-1 ">
              15 - 20 POUNDS
            </div>
          </div>
        </div>
        {/* height */}
        <div className="border-b border-black border-solid w-[250px]  "></div>
        <div className="ml-[10px]">
          <div>
            <div className="text-[35px] text-black pt-[50px]">
              <CiLineHeight />
            </div>
            <div className="text-[18px] font-[400px] text-[#4C5559] font-sans pt-1">
              Height
            </div>
            <div className="text-[12px] font-[700px] text-[#363636] font-sans pt-1 ">
              20 - 24 INCHES
            </div>
          </div>
        </div>
        {/* heart */}
        <div className="border-b border-black border-solid w-[250px]  "></div>
        <div className="ml-[10px]">
          <div>
            <div className="text-[35px] text-black pt-[50px]">
              <LuHeartPulse />
            </div>
            <div className="text-[18px] font-[400px] text-[#4C5559] font-sans pt-1">
              Longevity
            </div>
            <div className="text-[12px] font-[700px] text-[#363636] font-sans pt-1 ">
              11 - 14 YEARS
            </div>
          </div>
        </div>
        <div className="border-b border-black border-solid w-[120px]  "></div>
      </div>

      {/* flex1 */}
      <div className=" flex max-sm:flex-col ">
        {/*dog image2  */}
        <img
          src="/image2.jpg "
          width={300}
          className=" bg-cover  h-[300px] mt-[70px] ml-[23%]
         hover:opacity-75 hover:transition hover:ease-in-out hover:delay-500
          max-sm:w-full max-sm:h-[400px] max-sm:ml-1 max-md:ml-[35px] "
        ></img>
        {/* general health */}
        <div>
          <div className=" text-[30px] font-[400px] font-serif text-[#4C5559] ml-[40px] mt-[70px] max-sm:ml-1 ">
            General health
          </div>
          <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  mx-auto ml-[40px] w-[67%] mt-[10px] max-sm:w-full max-sm:ml-1 ">
            Morbi tincidunt facilisis nisi, sit amet suscipit ante sodales non.
            Praesent facilisis venenatis cursus. Pellentesque consectetur justo
            ligula, vitae viverra dolor posuere ut. Donec pulvinar * posuere
            hendrerit. Ut vel ante nisl.
            <br></br> <br></br>
            Nam tristique enim vitae sapien lobortis blandit. Proin nisi erat,
            ullamcorper ac luctus sed, euismod in lacus. Proin feugiat pulvinar
            metus, sit amet pretium sem.
          </div>
          <div className=" text-[13px] mt-[40px] ml-[40px] w-[63%] max-sm:w-full max-sm:ml-1">
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
            purus a lectus maximus tincidunt.
          </div>
        </div>
      </div>
      {/* flex2 */}
      <div className=" flex w-full max-sm:flex-col max-sm:w-full ">
        {/* care and feeding */}
        <div className=" w-[450px] ml-[12%] max-sm:w-full max-sm:ml-1 max-md:ml-[50px] ">
          <div className=" text-[30px] font-[400px] font-serif text-[#4C5559]  mt-[70px] ">
            Care and feeding
          </div>
          <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans   mt-[10px] ">
            in id congue justo, quis vestibulum tortor. Curabitur vulputate,
            massa ut lobortis ultricies, orci sapien faucibus velit, et
            scelerisque libero tellus et mi. Phasellus sit amet ligula sed ex
            fermentum ornare. Phasellus ultrices et mi ut molestie.
            <br></br> <br></br>
            Proin nisi erat, ullamcorper ac luctus sed, euismod in lacus. Proin
            feugiat pulvinar metus, sit amet pretium sem. Nam tristique enim
            vitae sapien lobortis blandit. Proin nisi erat, ullamcorper ac
            luctus sed, euismod in lacus. Proin feugiat pulvinar metus, sit amet
            pretium sem.
            <br></br> <br></br>
            Quisque dapibus ligula dignissim felis consequat, sed feugiat dolor
            rhoncus. Maecenas sed maximus ligula. Nam euismod metus id ornare
            volutpat.
          </div>
        </div>
        {/* dog image3 */}
        <img
          src="/image3.jpg"
          width={450}
          className=" w-[450px] max-sm:w-[600px] h-[280px] ml-[23px] mt-[70px] max-sm:ml-1
          hover:opacity-75 hover:transition hover:ease-in-out hover:delay-500"
        ></img>
      </div>
      {/* flex3 */}
      <div className=" flex max-sm:flex-col  ">
        {/*dog image4  */}
        <img
          src="/image4.jpg "
          width={200}
          className=" bg-cover  h-[200px] mt-[70px] ml-[30%] max-sm:w-full  max-sm:ml-0 max-sm:h-[400px] max-md:ml-[35px]
          hover:opacity-75 hover:transition hover:ease-in-out hover:delay-500"
        ></img>
        {/* <p>Consectetur adipiscing elit. Fusce ac purus a lectus maximus tincidunt in quis libero.</p> */}
        {/* grooming */}
        <div>
          <div className=" text-[30px] font-[400px] font-serif text-[#4C5559] ml-[40px] mt-[70px] max-sm:ml-1 ">
            Grooming
          </div>
          <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  mx-auto ml-[40px] w-[67%] mt-[10px] max-sm:w-full max-sm:ml-1 ">
            Nulla facilisi. Duis fringilla a dui sit amet euismod. Phasellus
            urna libero, pretium eget lacus sed, auctor ultrices libero.
            Phasellus pretium, mauris vel tincidunt tempus, lectus lacus
            tincidunt mi, ac viverra urna odio ut magna.
            <br></br> <br></br>
            Etiam quam quam, gravida eu pharetra nec, aliquet ac risus. Nunc
            vitae dolor eu enim iaculis congue eu pellentesque sem. Donec nec
            viverra nunc.
            <br></br> <br></br>
            Phasellus viverra, ante sit amet euismod bibendum, dui justo
            interdum ligula, non sodales magna turpis nec ligula.
          </div>
        </div>
      </div>
      <div>{/* last part */}</div>
      <div className="  w-full bg-[#F8F8F9] mt-[70px] p-[30px] max-sm:w-full max-sm:h-auto md:h-auto mb-[50px]">
        {/* good to know */}
        <div className=" text-[30px] font-[400px] font-serif text-[#4C5559] ml-[40px] mt-[70px] max-sm:pl-1 ">
          It&apos;s good to know!
        </div>
        <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  pl-[35px]  pr-[30px] pt-[10px] max-sm:pl-1  ">
          Duis vitae mi et lacus dignissim tristique nec ac lorem. Vestibulum
          tincidunt leo erat, eget auctor diam dictum vel. In eu tristique odio.
          Phasellus sed maximus nisi.
        </div>
        {/*flex4 last part  */}
        <div className=" flex flex-wrap m-[50px] max-sm:flex-col max-sm:m-auto max-sm:mt-[20px] max-w-[1140px] mx-auto">
          {/* part1 */}
          <div className=" w-[430px] flex max-sm:w-full ">
            <div className="  text-[36px] text-red-600">
              <FaShieldDog />
            </div>
            <div>
              <div className=" text-[20px] font-[400px] font-sans text-[#212222] pl-[15px]  ">
                Eget vestibulum suscipit
              </div>
              <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  pl-[15px]   pt-[10px]  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus nullam
                est dolorem sem.
              </div>
            </div>
          </div>
          {/* part2 */}
          <div className=" w-[400px] flex ml-[100px] max-sm:ml-0 max-sm:w-full max-sm:mt-3 max-md:ml-0 max-md:mt-[20px] ">
            <div className="  text-[36px] text-red-600">
              <FaShieldDog />
            </div>
            <div>
              <div className=" text-[20px] font-[400px] font-sans text-[#212222] pl-[15px]  ">
                Aliquam sed neque
              </div>
              <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  pl-[15px]   pt-[10px]  ">
                am tristique enim vitae sapien lobortis blandit. Proin nisi
                erat, ullamcorper ac luctus sed, euismod in lacus. Proin feugiat
                pulvinar metus, sit amet pretium sem.
              </div>
            </div>
          </div>
          {/* part3 */}
          <div className=" w-[430px] flex mt-[40px] max-sm:w-full">
            <div className="  text-[36px] text-red-600">
              <FaShieldDog />
            </div>
            <div>
              <div className=" text-[20px] font-[400px] font-sans text-[#212222] pl-[15px]  ">
                Pretium molestie felis sed
              </div>
              <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  pl-[15px]   pt-[10px]  ">
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo nullam est dolorem. Ut elit tellus, luctus nec ullamcorper
                mattis. Donec a nisl a eros volutpat imperdiet
              </div>
            </div>
          </div>
          {/* part4 */}
          <div className=" w-[400px] flex ml-[100px] mt-[40px] max-sm:ml-0 max-sm:w-full max-md:ml-0 max-md:mt-[20px]  ">
            <div className="  text-[36px] text-red-600">
              <FaShieldDog />
            </div>
            <div>
              <div className=" text-[20px] font-[400px] font-sans text-[#212222] pl-[15px]  ">
                Lorem condimentum
              </div>
              <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  pl-[15px]   pt-[10px]  ">
                Cras dictum, augue eget vestibulum suscipit, urna lectus iaculis
                lorem, et eleifend velit dui auctor nunc.
              </div>
            </div>
          </div>
          {/* part5 */}
          <div className=" w-[430px] flex mt-[40px] max-sm:w-full">
            <div className="  text-[36px] text-red-600">
              <FaShieldDog />
            </div>
            <div>
              <div className=" text-[20px] font-[400px] font-sans text-[#212222] pl-[15px]  ">
                Sed commodo magna
              </div>
              <div className=" text-[18px] font-[400px] text-[#4C5559]  font-sans  pl-[15px]   pt-[10px]  ">
                Cras porttitor odio sed tellus eleifend posuere. Phasellus
                viverra, ante sit amet euismod bibendum, dui justo interdum
                ligula, non sodales magna turpis nec ligula.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
