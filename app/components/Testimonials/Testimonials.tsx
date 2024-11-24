import React from "react";
import Image from "next/image";



function Testimonials() {
  return (
    <div id="Testimonial" className="w-full h-auto xl:py-[112px] xs:py-[48px] xl:px-[64px] xs:px-[24px] flex flex-col justify-center items-start gap-[80px] xl:bg-[#F7F7F7] xs:bg-white ">
      <div className="flex flex-col gap-[24px] xl:w-[560px] xs:w-[361px]">
        <h2 className="text-[48px] font-bold xl:block xs:hidden ">Customer testimonials</h2>
        <h2 className="text-[32px] font-bold xs:block xl:hidden text-center">What Our Student Say</h2>
        <p className="text-[18px] xs:text-center xl:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <div className="flex flex-row  justify-center items-center gap-[32px]   ">
          <div className="h-auto border-[1px] border-solid border-black xl:w-[362.67px] xs:w-[380px] p-[32px] flex flex-col gap-[24px] ">
            <div className="gap-[4px] flex ">
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <p className="text-[18px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="flex gap-[20px]">
                <div >
                  <Image
                  className="rounded-full"
                    src="/TeamMembers/IconPFP (3).svg"
                    width={56}
                    height={56}
                    alt="preview"
                  />
                </div>
                <div className="flex flex-col"><p className="text-[16px] font-semibold">James Nduku</p><p className="text-[16px]">Software Developer</p></div>
              </div>
            </div>
          </div>
          <div className="h-auto border-[1px] border-solid border-black w-[362.67px] p-[32px] xl:flex xs:hidden flex-col gap-[24px]">
            <div className="gap-[4px] flex ">
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <p className="text-[18px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="flex gap-[20px]">
                <div >
                  <Image
                  className="rounded-full"
                    src="/TeamMembers/IconPFP (1).svg"
                    width={56}
                    height={56}
                    alt="preview"
                  />
                </div>
                <div className="flex flex-col"><p className="text-[16px] font-semibold">Erick Kipkemboi</p><p className="text-[16px]">Scrum Master</p></div>
              </div>
            </div>
          </div>
          <div className="h-auto border-[1px] border-solid border-black w-[362.67px] p-[32px] xl:flex xs:hidden flex-col gap-[24px]">
            <div className="gap-[4px] flex ">
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
              <Image
                src="/blackStar.svg"
                width={20}
                height={20}
                alt="preview"
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <p className="text-[18px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="flex gap-[20px]">
                <div >
                  <Image
                  className="rounded-full"
                    src="/TeamMembers/IconPFP (6).svg"
                    width={56}
                    height={56}
                    alt="preview"
                  />
                </div>
                <div className="flex flex-col"><p className="text-[16px] font-semibold">Stephen Kerubo</p><p className="text-[16px]">UI/UX Designer</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex justify-start gap-[8px] w-1/2">
        <div className="text-black">&bull;</div>
        <div className="text-[#8D8D8D]">&bull;</div>
        <div className="text-[#8D8D8D]">&bull;</div>
        <div className="text-[#8D8D8D]">&bull;</div>
        <div className="text-[#8D8D8D]">&bull;</div>
        </div>
        <div className="gap-[15px] flex justify-end  "><button className="rounded-full w-auto h-auto"><Image src="/buttonScroll/Backward.svg" width={48} height={48} alt=""/></button>
        <button className="rounded-full w-auto h-auto"><Image src="/buttonScroll/Forward.svg" width={48} height={48} alt=""/></button></div>
        </div>
    </div>
  );
}

export default Testimonials;
