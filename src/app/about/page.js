import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=" text-center py-[100px] max-w-[1350px] mx-auto px-[80px] max-tab:px-[40px] max-md:px-[28px]">
      <div className="flex flex-col p-2 m-2 relative mx-auto">
        <Image
          src="/home/bgall.svg"
          alt=""
          width={750}
          height={400}
          className="absolute -top-4 max-md:hidden left-[17%] max-tab:left-[0%] -z-10 opacity-[0.03]"
        />
        <div className="text-3xl font-playfair text-[54px] py-3">About Us</div>
        <div className="w-full mx-auto  flex items-center justify-center">
          <Image
            style={{ fill: "red", opacity: "0.1" }}
            width={150}
            color="black"
            height={30}
            src="/home/vector.svg"
            alt="Diveider"
            className="text-black w-[250px] opacity-[0.2] m-auto my-[20px]  object-cover brightness-[0.5] fill-neutral-950  z-10"
          />
        </div>
        <div className="text-[19px] font-fira   text-stone-500  mx-auto">
          We hope to share our passion for Frenchies by using the years of
          experience and being lucky <br className="max-tab:hidden" /> to find
          just the perfect Frenchie mom and dad couple, that fully displays all{" "}
          <br className="max-tab:hidden" /> the characteristics of the breed.
        </div>

        <div className="md:grid flex items-center justify-center my-[40px]">
          <div className="flex items-center justify-center md:flex-row flex-col space-x-4 p-2">
            <div className="flex-col flex items-center gap-3 justify-center px-6 py-2 max-w-7xl">
              <div className="h-[100px] w-[100px]   overflow-hidden bg-gray-200">
                <Image
                  src="/about/1.jpg"
                  alt="image"
                  className="border-[6px] border-solid border-black border-opacity-[0.01]"
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <div className="text-[23px] font-playfair text-stone-600 cursor-pointer hover:text-stone-400">
                  Andrew Recamier
                </div>
                <div className=" text-gray-500  text-[16px] font-fira font-[300]">
                  Founder of Blue Frenchies
                </div>
              </div>
            </div>
            <div className="flex-col flex items-center justify-center gap-3 px-6 py-2">
              <div className="h-[100px] w-[100px]   overflow-hidden bg-gray-200">
                <Image
                  width={100}
                  height={100}
                  src="/about/2.jpg"
                  alt="image2"
                  className="border-[6px] border-solid border-black border-opacity-[0.01]"
                />
              </div>
              <div>
                <div className="text-[23px] font-playfair text-stone-600 cursor-pointer hover:text-stone-400">
                  Angela Recamier
                </div>
                <div className="text-[16px] font-fira font-[300] text-gray-500">
                  Another founder of Blue Frenchies
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 p-2 items-center justify-center md:flex-row flex-col"></div>
        </div>








        <div className="last flex max-md:flex-col gap-[50px] max-tab:gap-[30px]">
          <div className="one w-[50%] max-md:w-full overflow-hidden">
            <div className="flex gap-5 ">
          <img src="/about/dog1.jpg" alt="" className="w-[40%] h-[220px] max-tab:h-[180px] object-cover self-end"/>
          <img src="/about/dog2.jpg" alt="" className="w-[57%] h-[330px] max-tab:h-[250px] object-cover"/>
          </div>
          <div className="mt-5 w-full flex items-end justify-end">
            <img src="/about/dog3.jpg" alt="" className="w-[80%] h-[250px] max-tab:h-[180px] object-cover"/>
          </div>
          </div>
          <div className="tow w-[50%]  max-md:w-full">
            <p className="text-start font-fira font-[300] text-[17px]">Pellentesque pharetra nisl id elit mollis, non euismod velit scelerisque. Nam a libero ac est consequat cursus. Nunc in dolor lorem. Maecenas pulvinar, augue et imperdiet posuere, purus enim porttitor odio, ac luctus dui lorem cursus eros. Nunc consequat faucibus nisi a egestas. <br /> <br />
            Nulla non arcu sem. Vivamus eu leo rhoncus eros lobortis vestibulum non vitae massa. Nulla facilisi. Cras efficitur, mi nec iaculis fringilla, quam nulla consequat augue, at ullamcorper dolor orci et lacus. Fusce sed mi at odio vulputate dignissim. Sed pellentesque, augue eu suscipit ullamcorper nulla nullam.</p>
            <div className="my-[30px]">
              <h3 className="text-[20px] font-playfair italic px-[13px] text-start">Fusce finibus, eros id tristique euismod, turpis mauris volutpat lacus.</h3>
            </div>
            <p className="text-start font-fira font-[300] text-[17px]">Maecenas pulvinar, augue et imperdiet posuere, purus enim porttitor odio, ac luctus dui lorem cursus eros. Nunc consequat faucibus nisi a egestas. Nulla non arcu sem. Vivamus eu leo rhoncus eros lobortis vestibulum non vitae massa. Nulla facilisi. Cras efficitur, mi nec iaculis fringilla, quam nulla consequat augue, at ullamcorper dolor orci et lacus.</p>
            <div className="my-[30px]">
              <h3 className="text-[36px] font-playfair   text-start">Fusce egestas justo elementum magna volutpat.</h3>
            </div>
            <p className="text-start font-fira font-[300] text-[17px]">Tempus consequat. Maecenas viverra mollis massa blandit rutrum. Aliquam vitae neque sed metus efficitur mollis nec nec turpis. Nam tincidunt velit quis consectetur malesuada. Aenean at tristique augue. Vestibulum condimentum ligula et malesuada faucibus. Vivamus fermentum lorem ullamcorper fermentum fringilla. Integer pharetra cursus est, a sagittis urna euismod dictum. <br /> <br />
            Pellentesque pharetra nisl id elit mollis, non euismod velit scelerisque. Nam a libero ac est consequat cursus. Nunc in dolor lorem. Maecenas pulvinar, augue et imperdiet posuere, purus enim porttitor odio, ac luctus dui lorem cursus eros. Nunc consequat faucibus nisi a egestas. <br /> <br /> Nulla non arcu sem. Vivamus eu leo rhoncus eros lobortis vestibulum non vitae massa. Nulla facilisi. Cras efficitur, mi nec iaculis fringilla, quam nulla consequat augue, at ullamcorper dolor orci et lacus. Fusce sed mi at odio vulputate dignissim. Sed pellentesque, augue eu suscipit ullamcorper nulla nullam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
