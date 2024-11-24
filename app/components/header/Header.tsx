import React from "react";
import Image from "next/image";


function Header() {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-3 ">
        <div className=" bg-[#F7F7F7] w-full h-[54px] xl:flex xs:hidden items-center px-12">
          <div className="w-1/2 flex flex-row gap-3 items-center">
            <div className="text-[14px]">Phone Number: 956 742 455 678</div>
            <svg className=" h-[30px] w-[1px]">
              <rect className="text-[#676767] h-[30px] w-1" />
            </svg>
            <div className="text-[14px]">Email:info@ddsgnr.com</div>
          </div>
          <div className="w-1/2 flex flex-row justify-end items-center gap-3">
            <div>
              <a href="">
                <Image
                  src="/Icon/Facebook.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <div>
              <a href="">
                {" "}
                <Image
                  src="/Icon/Instagram.svg"
                  alt="Instagram icon"
                  width={18}
                  height={18}
                />
              </a>
            </div>
            <div>
              <a href="">
                <Image
                  src="/Icon/Twitter.svg"
                  alt="Twitter icon"
                  width={18}
                  height={18}
                />
              </a>
            </div>
            <div>
              <a href="">
                <Image
                  src="/Icon/Linkedin.svg"
                  alt="Facebook icon"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:bg-[#F7F7F7] xs:bg-white w-full h-[72px] flex items-center px-12 border-solid border-b-[1px] border-[#676767]">
          <div className="flex flex-row xl:items-center  xl:w-1/4 xs:w-full xs:justify-between ">
            <div className="flex flex-row gap-2">
              <Image src="/LOGO.svg" alt="LOGO" width={30} height={30} />
              <p className="text-[25.07px] font-bold flex justify-center items-center">
                Ddsgnr
              </p>
            </div>
            <div className="xs:flex xl:hidden items-center justify-center">
              <Image src="/Nav.svg" alt="Navigation" width={48} height={48} />
            </div>
          </div>
          <div className="bg-white h-[44px] items-center  w-3/4 xl:flex xs:hidden flex-row gap-5 text-[16px] ">
            <button className="border-b-[1px] focus:border-black border-solid duration-200">
              <a href="#Hero">
                <div className="p-2 border-b-[1px] border-black border-solid duration-200  ">Home</div>
              </a>
            </button>
            <button className="border-b-[1px] focus:border-black border-solid duration-200">
              <a href="#CoursesCatagories">
                <div className="p-2">Courses</div>
              </a>
            </button>
            <button className="border-b-[1px] focus:border-black border-solid duration-200">
              <a href="#Services">
                <div className="p-2">Services</div>
              </a>
            </button>
            <button className="border-b-[1px] focus:border-black border-solid duration-200">
              <a href="#Achievement">
                <div className="p-2">Achievement</div>
              </a>
            </button>
            <button className="border-b-[1px] focus:border-black border-solid duration-200">
              <a href="#About Us">
                <div className="p-2">About Us</div>
              </a>
            </button>
            <button className="border-b-[1px] focus:border-black border-solid duration-200">
              <a href="#Testimonial">
                <div className="p-2">Testimonial</div>
              </a>
            </button>
            <div className="flex flex-row gap-4  items-end w-fill">
              <div className="py-[7px] border-solid rounded-[5px] border-black border-[1px]  w-[70px] text-center">
                Login
              </div>
              <div className="py-[7px] border-solid rounded-[5px] border-black border-[1px] w-[70px]  text-center bg-black text-white">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
