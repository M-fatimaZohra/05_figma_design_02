import Image from "next/image";
import Hero from "./components/Hero/Hero";
import CTA1 from "./components/CTA1/CTA1";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import { Button } from "@/components/ui/button";
import Footer from "./components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <CTA1 />
      {/* COURSES CATAGORIES */}
      <div
        id="CoursesCatagories"
        className="h-auto xl:py-[112px] xs:px-[24px] xl:px-0 w-full flex flex-col gap-[80px]"
      >
        <div className="flex  justify-center">
          <div className="flex flex-col w-auto h-auto gap-6">
            <h2 className="xl:text-[48px] xs:text-center xs:text-[32px] font-bold flex">
              Explore Courses By Category
            </h2>
            <p className="text-[18px] xs:text-center">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center h-auto w-full items-center gap-16  ">
        <div className="grid xl:grid-cols-3 xs:grid-cols-1 xs:gap-y-[24px] xl:gap-y-[64px] xl:gap-x-[24px] xs:h-[444px] xl:h-auto xs:overflow-hidden xl:overflow-visible w-full">

            <Link href="./"><div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/1.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">
                  Design & Development
                </h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div></Link>
          <Link href="./"> 
          <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/2.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Marketing</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div></Link> 
          <Link href="./"> 
           <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/3.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Development</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div>
            </Link>
          <Link href="./">
            <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/4.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Communication</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div></Link>
          <Link href="./">
            <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/5.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Digital Marketing</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div> </Link>
          <Link href="./">
           <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/6.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Self Development</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div></Link> 
          <Link href="./">
            <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/7.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Business</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div> </Link>
          <Link href="./">
            <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/8.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Finance</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div></Link>
          <Link href="./">
            <div className="bg-[#F7F7F7] gap-[16px] p-4 flex flex-row justify-center items-center  xl:w-[410.67px] xs:w-[380px] h-auto">
              <div>
                <Image
                  src="/CourseIcon/9.svg"
                  width={100}
                  height={100}
                  alt="/Course"
                />
              </div>
              <div className="w-[246.67px]">
                <h3 className="text-[20px] font-semibold">Consulting</h3>
                <p className="text-[18px]">50+ Courses Available</p>
              </div>
            </div></Link>
          </div>
         <Button variant="outline1" size="type1">View All Courses</Button>
        </div>
      </div>

      {/* ACHIVEMENTS */}
      <div id="Achievement" className="w-full h-auto lg:py-[112px] lg:px-16  xs:py-[48px] xs:px-[24px] ">
        <div className="flex flex-col items-center gap-6 xs:gap-[48px]">
          <div className="gap-[16px] flex flex-col justify-center items-center ">
            <h2 className=" lg:text-[48px] font-bold xs:text-[32px]">Our Achivements</h2>
            <p className=" text-center text-[18px] xs:hidden lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <p className=" text-center text-[18px] lg:hidden w-[362px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
          </div>
          <div className="flex lg:flex-row xs:flex-col lg:gap-6 gap-[24px]">
            <div className="flex flex-row lg:gap-6 xs:gap-[16px] xs:py-[8px] ">
              <div className="flex flex-col xl:w-[296px] xs:w-[182px] justify-center items-center"> 
                <h3 className="xl:text-[40px] xs:text-[20px]  font-bold xl:w-[296px] xs:w-[46px] text-center">
                  +200
                </h3>
                <p className="text-[16px]">Courses</p>
              </div>
              <div className="flex flex-col xl:w-[296px] xs:w-[182px] justify-center items-center">
                <h3 className="xl:text-[40px] xs:text-[20px]  font-bold xl:w-[296px] xs:w-[46px] text-center">
                  50K
                </h3>
                <p className="text-[16px]">Mentors</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 xs:gap-[16px] xs:py-[8px]">
              <div className="flex flex-col xl:w-[296px] xs:w-[182px] justify-center items-center">
                <h3 className="xl:text-[40px] xs:text-[20px]  font-bold xl:w-[296px] xs:w-[46px] text-center">
                  370k
                </h3>
                <p className="text-[16px]">Students</p>
              </div>
              <div className="flex flex-col xl:w-[296px] xs:w-[182px] justify-center items-center">
                <h3 className="xl:text-[40px] xs:text-[20px]  font-bold xl:w-[296px] xs:w-[46px] text-center">
                  100+
                </h3>
                <p className="text-[16px]">Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COURSES */}
      <div
        id="courses"
        className="w-full h-auto xl:py-[112px] xs:py-[48px]   gap-[60px] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-[16px]  px-16 justify-center items-center xl:w-[768px] xs:w-auto ">
          <h2 className="lg:text-[56px] xs:text-[32px] font-bold">Courses</h2>
          <p className="text-[18px] ">Your Ultimate Guide to learning</p>
        </div> 

        <div className="gap-16 w-full flex flex-col">
          <div>
            <div className="flex flex-row gap-3 justify-center items-start text-[16px]">
            <button className="border-b-[1px] focus:border-black border-solid duration-200 " ><div className="p-2  flex justify-center items-center ">
              Popular
              </div></button>  
              <button className="border-b-[1px] focus:border-black border-solid duration-200"><div className="p-2 flex justify-center  items-center">
              Recommended 
              </div></button>
              <button className="border-b-[1px] focus:border-black border-solid duration-200"> <div className="p-2 flex  justify-center items-center">
              Best Price  
              </div></button>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 xs:grid-cols-1 xs:gap-[32px] xs:px-[24px] xl:px-0  xl:gap-x-8 xl:gap-y-16">
            <div className="w-auto bg-[#F7F7F7] flex flex-col gap-6">
              <div>
                <Image
                  src="/Course_preview/PRE_1.svg"
                  width={416}
                  height={300}
                  alt="PREVIEW"
                />
              </div>
              <div className="px-[16px] pb-[24px] gap-[24px] flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <p className="text-[14px] font-semibold flex w-4/5 items-center">
                      Design
                    </p>
                    <div className="flex w-1/5 gap-[4px]">
                      <div className="">
                        <Image
                          className="flex items-center justify-center"
                          src="/Star.svg"
                          width={24}
                          height={24}
                          alt="star"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold flex items-center justify-end">
                          5.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-[24px]">UX/UI Design 201</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex flex-row w-full gap-[16px]">
                    <button className="text-[16px] font-semibold py-[8px] px-[20px] flex justify-center items-center border-[1px] border-solid border-black rounded-[5px]">
                      Enroll Now
                    </button>  

                    <div className="flex justify-center items-center">
                      <p className="text-[16px] font-medium">$400</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-auto bg-[#F7F7F7] flex flex-col gap-6">
              <div>
                <Image
                  src="/Course_preview/PRE_2.svg"
                  width={416}
                  height={300}
                  alt="PREVIEW"
                />
              </div>
              <div className="px-[16px] pb-[24px] gap-[24px] flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <p className="text-[14px] font-semibold flex w-4/5 items-center">
                    Programmimg
                    </p>
                    <div className="flex w-1/5 gap-[4px]">
                      <div className="">
                        <Image
                          className="flex items-center justify-center"
                          src="/Star.svg"
                          width={24}
                          height={24}
                          alt="star"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold flex items-center justify-end">
                          5.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-[24px]">Introduction to Python</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex flex-row w-full gap-[16px]">
                    <button className="text-[16px] font-semibold py-[8px] px-[20px] flex justify-center items-center border-[1px] border-solid border-black rounded-[5px]">
                      Enroll Now
                    </button>  

                    <div className="flex justify-center items-center">
                      <p className="text-[16px] font-medium">$400</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-auto bg-[#F7F7F7] flex flex-col gap-6">
              <div>
                <Image
                  src="/Course_preview/PRE_3.svg"
                  width={416}
                  height={300}
                  alt="PREVIEW"
                />
              </div>
              <div className="px-[16px] pb-[24px] gap-[24px] flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <p className="text-[14px] font-semibold flex w-4/5 items-center">
                    Business
                    </p>
                    <div className="flex w-1/5 gap-[4px]">
                      <div className="">
                        <Image
                          className="flex items-center justify-center"
                          src="/Star.svg"
                          width={24}
                          height={24}
                          alt="star"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold flex items-center justify-end">
                          5.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-[24px]">Data Analysis for Beginners</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex flex-row w-full gap-[16px]">
                    <button className="text-[16px] font-semibold py-[8px] px-[20px] flex justify-center items-center border-[1px] border-solid border-black rounded-[5px]">
                      Enroll Now
                    </button>  

                    <div className="flex justify-center items-center">
                      <p className="text-[16px] font-medium">$400</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-auto bg-[#F7F7F7] flex flex-col gap-6">
              <div>
                <Image
                  src="/Course_preview/PRE_4.svg"
                  width={416}
                  height={300}
                  alt="PREVIEW"
                />
              </div>
              <div className="px-[16px] pb-[24px] gap-[24px] flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <p className="text-[14px] font-semibold flex w-4/5 items-center">
                    Art
                    </p>
                    <div className="flex w-1/5 gap-[4px]">
                      <div className="">
                        <Image
                          className="flex items-center justify-center"
                          src="/Star.svg"
                          width={24}
                          height={24}
                          alt="star"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold flex items-center justify-end">
                          5.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-[24px]">Art Specialization</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex flex-row w-full gap-[16px]">
                    <button className="text-[16px] font-semibold py-[8px] px-[20px] flex justify-center items-center border-[1px] border-solid border-black rounded-[5px]">
                      Enroll Now
                    </button>  

                    <div className="flex justify-center items-center">
                      <p className="text-[16px] font-medium">$400</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-auto bg-[#F7F7F7] flex flex-col gap-6">
              <div>
                <Image
                  src="/Course_preview/PRE_5.svg"
                  width={416}
                  height={300}
                  alt="PREVIEW"
                />
              </div>
              <div className="px-[16px] pb-[24px] gap-[24px] flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <p className="text-[14px] font-semibold flex w-4/5 items-center">
                    Law
                    </p>
                    <div className="flex w-1/5 gap-[4px]">
                      <div className="">
                        <Image
                          className="flex items-center justify-center"
                          src="/Star.svg"
                          width={24}
                          height={24}
                          alt="star"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold flex items-center justify-end">
                          5.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-[24px]">Rule of Law</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex flex-row w-full gap-[16px]">
                    <button className="text-[16px] font-semibold py-[8px] px-[20px] flex justify-center items-center border-[1px] border-solid border-black rounded-[5px]">
                      Enroll Now
                    </button>  

                    <div className="flex justify-center items-center">
                      <p className="text-[16px] font-medium">$400</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-auto bg-[#F7F7F7] flex flex-col gap-6">
              <div>
                <Image
                  src="/Course_preview/PRE_6.svg"
                  width={416}
                  height={300}
                  alt="PREVIEW"
                />
              </div>
              <div className="px-[16px] pb-[24px] gap-[24px] flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <p className="text-[14px] font-semibold flex w-4/5 items-center">
                    Tech
                    </p>
                    <div className="flex w-1/5 gap-[4px] justfy-center items-center">
                      <div className="">
                        <Image
                          className="flex items-center justify-center"
                          src="/Star.svg"
                          width={24}
                          height={24}
                          alt="star"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold flex items-center justify-end">
                          5.0
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-[24px]">Introduction to webflow</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex flex-row w-full gap-[16px]">
                    <button className="text-[16px] font-semibold py-[8px] px-[20px] flex justify-center items-center border-[1px] border-solid border-black rounded-[5px]">
                      Enroll Now
                    </button>  

                    <div className="flex justify-center items-center">
                      <p className="text-[16px] font-medium">$400</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center ">
             <Button variant="outline1" className="flex justify-center items-center py-[8px] px-[16px] h-auto w-auto"><p className="w-[120px] h-[24px] text-[16px] ">View All Courses</p></Button>
          </div>

        </div>
      </div>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
 