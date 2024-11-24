import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function Team() {
  return (
    <div id="About Us" className="h-auto w-full bg-[#F7F7F7] xl:py-[112px] xs:py-[48px] xl:px-0 xs:px-[24px] flex flex-col justify-center items-center gap-[80px] ">
      <div className="xl:px-[64px] flex flex-col justify-center items-center gap-[16px] ">
        <h2 className="lg:text-[48px] xs:text-[32px] font-bold">Our team</h2>
        <p className="text-[18px] xs:text-center xl:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="w-full grid xl:grid-cols-3 xs:gird-cols-1 gap-y-[96px] gap-x-[48px]">
        <div className="w-[394.67px] flex flex-col justify-center items-center gap-[24px]">
          <Image
            src="/TeamMembers/IconPFP (1).svg"
            width={80}
            height={80}
            alt="Person"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">James Nduku</p>
            <p className="text-[18px]">Marketing Coordinator</p>
          </div>
          <div className="h-auto w-auto flex flex-row gap-[14px]">
            <Image src="/followTeam/LinkedIn.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Twitter.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Vector.svg" width={20} height={20} alt="" />
            </div>
        </div>
        <div className="w-[394.67px] flex flex-col justify-center items-center gap-[24px]">
          <Image
            src="/TeamMembers/IconPFP (2).svg"
            width={80}
            height={80}
            alt="Person"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">Joseph Munyambu</p>
            <p className="text-[18px]">Nursing Assistant</p>
          </div>
          <div className="h-auto w-auto flex flex-row gap-[14px]">
            <Image src="/followTeam/LinkedIn.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Twitter.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Vector.svg" width={20} height={20} alt="" />
            </div>
        </div>
        <div className="w-[394.67px] flex flex-col justify-center items-center gap-[24px]">
          <Image
            src="/TeamMembers/IconPFP (3).svg"
            width={80}
            height={80}
            alt="Person"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">Joseph Ngumbau</p>
            <p className="text-[18px]">Medical Assistant</p>
          </div>
          <div className="h-auto w-auto flex flex-row gap-[14px]">
            <Image src="/followTeam/LinkedIn.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Twitter.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Vector.svg" width={20} height={20} alt="" />
            </div>
        </div>
        <div className="w-[394.67px] xl:flex xs:hidden flex-col justify-center items-center gap-[24px]">
          <Image
            src="/TeamMembers/IconPFP (4).svg"
            width={80}
            height={80}
            alt="Person"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">Erick Kipkemboi</p>
            <p className="text-[18px]">Web Designer</p>
          </div>
          <div className="h-auto w-auto flex flex-row gap-[14px]">
            <Image src="/followTeam/LinkedIn.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Twitter.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Vector.svg" width={20} height={20} alt="" />
            </div>
        </div>
        <div className="w-[394.67px] xl:flex xs:hidden flex-col justify-center items-center gap-[24px]">
          <Image
            src="/TeamMembers/IconPFP (5).svg"
            width={80}
            height={80}
            alt="Person"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">Stephen Kerubo</p>
            <p className="text-[18px]">President of Sales</p>
          </div>
          <div className="h-auto w-auto flex flex-row gap-[14px]">
            <Image src="/followTeam/LinkedIn.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Twitter.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Vector.svg" width={20} height={20} alt="" />
            </div>
        </div>
        <div className="w-[394.67px] xl:flex xs:hidden flex-col justify-center items-center gap-[24px]">
          <Image
            src="/TeamMembers/IconPFP (6).svg"
            width={80}
            height={80}
            alt="Person"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[20px] font-semibold">John Leboo</p>
            <p className="text-[18px]">Dog Trainer</p>
          </div>
          <div className="h-auto w-auto flex flex-row gap-[14px]">
            <Image src="/followTeam/LinkedIn.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Twitter.svg" width={20} height={20} alt="" />
            <Image src="/followTeam/Vector.svg" width={20} height={20} alt="" />
            </div>
        </div>
      </div>
      <div className="xl:hidden xs:block"><Button variant="outline1" size="type2" className="bg-[#F7F7F7] py-[8px] px-[16px]">View All </Button></div>
    </div>
  );
}

export default Team;
