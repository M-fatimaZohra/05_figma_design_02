import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full h-auto xl:p-[80px] xs:py-[48px] xs:px-[24px] flex flex-col justify-center items-center ">
      <div className="xl:w-[1120px] xs:w-[380px] h-auto flex flex-col xl:gap-[80px] xs:gap-[48px]">
        <div className="flex xl:flex-row xs:flex-col items-center xl:justify-between xs:justify-center">
          <div className="xl:w-[500px] flex flex-col justify-start xl:items-start xs:items-center xs:w-auto xs:gap-[16px] xl:gap-0">
            <p className="text-[18px] font-bold">Subscribe to our newsletter</p>
            <p className="text-[16px] xl:w-full xs:w-[287px] xs:text-center xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-end xl:items-start xs:items-center gap-[16px] w-[400px]">
            <div className="flex xl:flex-row xs:flex-col justify-end items-start gap-[16px]">
              <input
                type="text"
                className="rounded-[5px] border-[1px] border-black border-solid xl:w-[256px] xs:w-[380px] p-[12px] text-[16px]"
                placeholder="Enter your email"
                
              />
              <Button variant="outline1" size="type1" className="xs:w-[380px] xl:w-full">
                Subscribe
              </Button>
            </div>
            <p className="text-[12px] ">
              By subscribing you agree to with our <u><a href="">Privacy Policy</a></u>
            </p>
          </div>
        </div>
        <div className="flex xl:flex-row xs:flex-col gap-[40px] xs:items-center xl:items-stretch ">
          <div className="flex flex-row gap-[10.5px] xl:justify-start xl:items-start xs:justify-center xs:items-center w-[250px]">
            <Image src="/LOGO.svg" alt="LOGO" width={30} height={30} />
            <p className="text-[25.07px] font-bold xs:text-center xl:text-left">Ddsgnr</p>
          </div>
          <div className="flex flex-col w-[250px] gap-[16px] xl:justify-start xl:items-start xs:justify-center xs:items-center ">
            <div className="text-[16px] font-semibold">
              <p>Courses</p>
            </div>
            <div className="flex flex-col xl:justify-start xl:items-start xs:justify-center xs:items-center">
              <p className="py-[8px] text-[14px]">Business</p>
              <p className="py-[8px] text-[14px]">Development</p>
              <p className="py-[8px] text-[14px]">Technology</p>
              <p className="py-[8px] text-[14px]">Design</p>
              <p className="py-[8px] text-[14px]">Programming</p>
            </div>
          </div>
          <div className="flex flex-col w-[250px] gap-[16px] xl:justify-start xl:items-start xs:justify-center xs:items-center">
            <div className="text-[16px] font-semibold">
              <p>Resources</p>
            </div>
            <div className="flex flex-col xl:justify-start xl:items-start xs:justify-center xs:items-center">
              <p className="py-[8px] text-[14px]">Career</p>
              <p className="py-[8px] text-[14px]">Resume</p>
              <p className="py-[8px] text-[14px]">Learning</p>
              <p className="py-[8px] text-[14px]">Interview Preparation</p>
              <p className="py-[8px] text-[14px]">Jobs</p>
            </div>
          </div>
          <div className="flex flex-col w-[250px] gap-[16px] xl:justify-start xl:items-start xs:justify-center xs:items-center">
            <div className="text-[16px] font-semibold">
              <p>About Us</p>
            </div>
            <div className="flex flex-col xl:justify-start xl:items-start xs:justify-center xs:items-center">
              <p className="py-[8px] text-[14px]">Contact</p>
              <p className="py-[8px] text-[14px]">Help/Support</p>
              <p className="py-[8px] text-[14px]">FAQ</p>
              <p className="py-[8px] text-[14px]">Terms and Conditions</p>
              <p className="py-[8px] text-[14px]">Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] w-full h-auto">
          <hr className="border-black" />
          <div className="flex xl:flex-row xs:flex-col justify-between xs:gap-[24px] xl:gap-0">
            <div className="flex xl:flex-row xs:flex-col  gap-[24px] text-[14px]">
              <div className="xs:text-center xl:text-left">2023 Ddsgnr. All right reserved.</div>
              <div className="flex flex-row gap-[24px] xs:justify-center xl:justify-start">
              <p className="xs:text-center xl:text-left"><u><a href="">Privacy Policy</a></u></p>
              <p className="xs:text-center xl:text-left"><u><a href="">Terms of Service</a></u></p>
              <p className="xs:text-center xl:text-left"><u><a href="">Cookies Settings</a></u></p>
              </div>
            </div>
            <div>
              <div className=" flex flex-row xl:justify-end xs:justify-center items-center gap-3">
                <div>
                <a href=""><Image
                    src="/Icon/Facebook.svg"
                    alt="Facebook icon"
                    width={24}
                    height={24}
                  /></a>
                </div>
                <div>
                <a href=""><Image
                    src="/Icon/Instagram.svg"
                    alt="Instagram icon"
                    width={18}
                    height={18}
                  /></a>
                </div>
                <div>
                <a href=""><Image
                    src="/Icon/Twitter.svg"
                    alt="Twitter icon"
                    width={18}
                    height={18}
                  /></a>
                </div>
                <div>
                <a href=""> <Image
                    src="/Icon/Linkedin.svg"
                    alt="Facebook icon"
                    width={18}
                    height={18}
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
