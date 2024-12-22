import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { Inter } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { IoEllipse } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import sauce from "../public/sauce.png";
import toast from "../public/toast.png";
import eggImg from '../public/Image-egg.png';
import Image from "next/image";

const inter = Inter({ 
    subsets: ["latin"], 
    variable: '--font-inter',
  });
const great =Great_Vibes({
    subsets:["latin"],
    weight:'400',
})

export default function Header1(){
    return(
        <div className="bg-black relative pt-[45px] w-full">
             <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:ml-[300px] absolute inset-0 bg-[url('/unsplash.png')] bg-cover bg-center opacity-10 before:content-[''] before:absolute before:inset-0"></div>
            <div className="relative">
                <div className="w-full place-items-center mb-4">
                    
                    <h1 className="font-Helvetica text-[24px] leading-8 text-yellow-600">Food<span className="text-white">tuck</span></h1>
                </div>
                <div className="flex flex-row justify-between w-full items-center ml-4">
                    <GiHamburgerMenu className="bg-black text-white text-[24px] md:hidden"/>
                    <div className="text-white ml-4 md:ml-[100px] xl:ml-[200px] 2xl:ml-[300px] items-center hidden md:flex gap-8 md:justify-around text-[16px]">
                        <Link href='/' className="self-end">Home<IoEllipse  className="text-[#FF9F0D]"/></Link>
                        <Link href='/Menu' >Menu</Link>
                        <Link href='/Blog' >Blog</Link>
                        <Link href='/Pages' >Pages</Link>
                        <Link href='/About' className="flex">About<MdKeyboardArrowDown className="text-white items-end"/></Link>
                        <Link href='/Shop' >Shop</Link>
                        <Link href='/Contact' >Contact</Link>
                        
                    </div>
                    <div className="order-last w-[336px] flex items-center">
                        <div className={`${inter.className} items-center border-[1px] border-[#FF9F0D] rounded-[27px] text-white/70 text-[16px] flex md:justify-around gap-x-10 px-4 py-2 ml-12 md:ml-0`}>Search...
                        <IoSearchSharp className="text-white "/>
                        </div>
                        <Link href='/Cart'><PiHandbagLight className="text-white bg-black text-[16px] ml-1" /></Link>
                        
                    </div>
                    
                </div>
                {/*Add text margin in large screen */}
                <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:[300px] mt-[66px] flex flex-col lg:flex-row justify-around">
                    <div className="w-full md:w-[472px] mt-[95px]">
                        <p className={`${great.className} text-[#FF9F0D] text-[32px]`}>Its Quick & Amusing!</p>
                        <p className="mt-2 font-Helvetica font-bold text-[60px] leading-[68px] text-[#FF9F0D]">Th<span className="text-white">e Art of speed food Quality</span></p>
                        <p className="mt-8 font-normal text-[16px] text-white leading-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Varius sed pharetra dictum neque massa congue</p>
                        <button className="rounded-[30px] bg-[#FF9F0D] w-[190px] h-[60px] mt-8 text-[16px] leading-6 text-white">See Menu</button>
                    </div>
                    <div className="flex ">
                        <Image src={eggImg} alt="egg-image" className="w-[877px] h-[670px]"/>

                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}