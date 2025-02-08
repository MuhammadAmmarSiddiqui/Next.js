import Image from "next/image";
import salad from '../public/salad.png';
import burger from '../public/burger2.png';
import bites from '../public/bites.png';
import smallbg from '../public/smallbg.png';
import bgfries from '../public/bgfries.png';
import forksalad from '../public/forksalad.png';
import { Great_Vibes } from "next/font/google";
import { PiHamburgerThin } from "react-icons/pi";
import { PiCookieThin } from "react-icons/pi";
import { PiWineThin } from "react-icons/pi";

const great =Great_Vibes({
    subsets:["latin"],
    weight:'400',
})

export default function WhyUs(){
    return(
        <div className="mt-[120px]">
            <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:[300px] flex flex-col 2xl:flex-row xl:justify-around items-center">
                <div>
                    <div className="flex flex-col md:flex-row gap-4 items-center ">
                    <Image src={salad} alt='salad-image'/>
                    <Image src={burger} alt="burger-image" className="md:self-end rounded-md" />

                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4 items-center md:items-start">
                    <Image src={bites} alt="food-image"/>
                    <Image src={smallbg} alt="food-image" className="self-auto md:self-start"/>
                    <div className="flex flex-col gap-4 ">
                        <Image src={bgfries} alt="food-image"/>
                        <Image src={forksalad} alt="food-image"/>
                    </div>
                </div>
            </div>

            <div className="mt-[62px]">
                <p className={`${great.className} text-[#FF9F0D] text-[32px] leading-10`}>Why Choose us</p>
                <p className="mt-2 w-full md:w-[433px] text-[#FF9F0D] font-Helvetica font-bold text-[48px] leading-[56px]">Ex<span className="text-white">ta ordinary taste And Experienced</span></p>
                <p className="w-full md:w-[526px] font-normal text-[16px] leading-6 text-white mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <div className="mt-[54px] flex gap-[35px]">
                    <div>
                        <div className="w-[82px] h-[80px] md:w-[102px] md:h-[100px] rounded-md bg-[#FF9F0D]  place-content-center">
                            <PiHamburgerThin className="text-white justify-self-center w-[56px] h-[56px]"/>
                        </div>
                        <p className="mt-[9px] text-white text-center">Fast Food</p>
                    </div>
                    <div>
                        <div className="w-[82px] h-[80px] md:w-[102px] md:h-[100px] rounded-md bg-[#FF9F0D]  place-content-center">
                            <PiCookieThin className="text-white justify-self-center w-[56px] h-[56px]"/>
                        </div>
                        <p className="mt-[9px] text-white text-center">Lunch</p>
                    </div>
                    <div>
                        <div className="w-[82px] h-[80px] md:w-[102px] md:h-[100px] rounded-md bg-[#FF9F0D]  place-content-center">
                            <PiWineThin className="text-white justify-self-center w-[56px] h-[56px]"/>
                        </div>
                        <p className="mt-[9px] text-white text-center">Dinner</p>
                    </div>
                </div>

                <div className="w-[300px] md:w-[374px]  h-[93px] mt-[34px] rounded-md flex">
                    <div className="w-[10px] h-full bg-[#FF9F0D] rounded-l-md"></div>
                    <div className="pl-[41px] flex grow bg-white items-center rounded-r-md justify-around">
                        <p className="font-Helvetica font-bold text-[48px] leading-[56px] text-[#FF9F0D]">30+</p>
                        <div>
                            <p className="font-normal text-[20px] leading-7">Years of </p>
                            <p className="font-Helvetica font-bold text-[24px] leading-8">Experienced</p>
                        </div>
                        

                    </div>

                </div>
            </div>
           

        </div>
            
    </div>
    )
}