import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div id="Hero">
      <div className="flex xl:flex-row xs:flex-col h-[800px] bg-white">
        <div className="xl:w-1/2 w-full flex flex-col xl:p-12 xs:py-[64px] xs:px-[24px]   justify-center gap-[24px]">
          <div className="xl:w-[500px] xs:w-[380px]">
            <h1 className="xl:text-[56px] xs:text-[40px] font-bold ">
              Learn new skills online with ease
            </h1>
            <p className="text-[18px] ">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex flex-row gap-2  items-end h-[64px] text-[16px]">
            <Button variant="default" size="button">
              <p className="text-[16px] font-normal">Start learning now</p>
            </Button>
            
            <Button variant="outline" size="button">
            <p className="text-[16px] font-normal">Explore Courses</p>
            </Button>
            
          </div>
        </div>
        <div className="xl:w-1/2 xs:overflow-hidden  w-auto flex flex-col justify-start items-end">
          <Image
            className="w-fit xs:hidden xl:block xl:h-[800px] "
            src="/HeroIcon.svg"
            alt="smiling girl"
            width={640}
            height={900}
          />
           <Image
            className=" xl:hidden "
            src="/HeroIcon.svg"
            alt="smiling girl"
            width={428}
            height={390}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
