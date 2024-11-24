import React from 'react'
import Image from 'next/image'

function CTA1() {
  return (
    <div>
         <div className='p-2 xs:py-[48px] xs:px-[24px] h-[228px] flex  xl:flex-row xs:flex-col gap-10 justify-center xl:items-center bg-[#F7F7F7]'>
          <div className='xl:hidden font-bold text-[18px] w-[327px] font-sans'>Trusted by the world&apos;s best companies [social proof to build credibility]</div>
        <div className='w-1/3 text-[24px] font-bold xs:hidden xl:block '>Trusted by 2000+ companies worldwide.</div>
        <div className='xl:w-[880px] xs:w-[405px] h-[56px] flex xl:justify-end xs:justify-start  xl:items-center xs:items-start '> 
        <div className='xs:hidden  xl:flex flex-row gap-2 justify-end items-end  '>
        <Image src="/CTA1/Logo (1).svg" alt="Logo 1.svg" width={150} height={150}/>
        <Image src="/CTA1/Logo (2).svg" alt="Logo 2.svg" width={150} height={150}/>
        <Image src="/CTA1/Logo (3).svg" alt="Logo 3.svg" width={150} height={150}/>
        <Image src="/CTA1/Logo (4).svg" alt="Logo 4.svg" width={150} height={150}/>
        <Image src="/CTA1/Logo (5).svg" alt="Logo 5.svg" width={150} height={150}/>
        <Image src="/CTA1/Logo (6).svg" alt="Logo 6.svg" width={150} height={150}/>
        </div>
        <div className='flex flex-row gap-2 justify-start items-start xl:hidden overflow-y-scroll scroll-smooth  '>
        <Image src="/CTA1/Logo (1).svg" alt="Logo 1.svg" width={107.15} height={107.15}/>
        <Image src="/CTA1/Logo (2).svg" alt="Logo 2.svg" width={107.15} height={107.15}/>
        <Image src="/CTA1/Logo (3).svg" alt="Logo 3.svg" width={107.15} height={107.15}/>
        <Image src="/CTA1/Logo (4).svg" alt="Logo 4.svg" width={107.15} height={107.15}/>
        <Image src="/CTA1/Logo (5).svg" alt="Logo 5.svg" width={107.15} height={107.15}/>
        <Image src="/CTA1/Logo (6).svg" alt="Logo 6.svg" width={107.15} height={107.15}/>
        </div>
        </div>
      
    </div>
    </div>
   
  )
}

export default CTA1
