import { AiOutlineHistory } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import bites from '../public/bites.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bg-black ">
            <div className="pt-[120px] pb-[56px]">
            <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:ml-[300px]">
                <div className=" flex flex-col gap-4 lg:flex-row lg:justify-around ">
                <div>
                    <h1 className="font-Helvetica font-bold text-[32px] leading-10 text-[#FF9F0D]">St<span className="text-white">ill You Need Our Support ?</span></h1>
                    <p className="mt-[15.96px] font-normal font-Helvetica text-[16px] leading-6 text-white ">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div className="flex">
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="w-[176px] md:w-[296px] h-[55.86px] rounded-l-[4px] bg-[#FF9F0D] text-[16px] text-white/[59%] leading-6 pl-5" />
                    <button className="w-[83px] md:w-[163px] h-[55.86px] bg-white rounded-r-[4px] text-[16px] leading-6 font-normal text-[#FF9F0D]">Subscribe Now</button>
                </div>
            </div>
            <div className="mx-4">
                <hr  className="mt-[31.93px] border-[1px] border-[#FF9F0D]" />
            </div>
            <div className="mt-[56px] flex flex-row gap-[120px] flex-wrap">
                <div className="text-white font-Helvetica w-[395.2px] h-[261.21px]">
                    <h1 className="font-bold text-[20px] leading-7">About Us.</h1>
                    <p className="mt-8 w-[255px] md:w-[395.92px] font-normal text-[18px] leading-[26px] font-Helvetica">orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                    <div className="mt-[23.92px] w-[243.74px] flex justify-between">
                        <div className="w-[77.23px] h-[70.29px] bg-[#FF9F0D] place-content-center rounded-[3px]">
                            <AiOutlineHistory className="text-white justify-self-center w-[39.61px] h-[39.33px]"/>
                        </div>
                        <div className="font-normal text-white">
                            <p className="text-[18px] leading-[26px]">Opening Houres</p>
                            <p className="text-[14px] leading-[22px]">Mon - Sat(8.00 - 6.00)</p>
                            <p className="text-[14px] leading-[22px]">Sunday - Closed</p>
                        </div>

                    </div>
                </div>
                <div className="text-white flex flex-col">
                    <h1 className="font-bold text-[20px] leading-7 font-Helvetica">Useful Links</h1>
                    <Link href='/About' className="mt-[23.92px] font-Helvetica font-normal text-[16px] leading-6">About</Link>
                    <Link href='/News' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">News</Link>
                    <Link href='/Partners' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Partners</Link>
                    <Link href='/Chef' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Team</Link>
                    <Link href='/Menu' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Menu</Link>
                    <Link href='/Contact' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Contact</Link>
                </div>
                <div className="text-white flex flex-col">
                    <h1 className="font-bold text-[20px] leading-7 font-Helvetica">Help?</h1>
                    <Link href='/FAQ' className="mt-[23.92px] font-Helvetica font-normal text-[16px] leading-6">FAQ</Link>
                    <Link href='/T&C' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Term & Condition</Link>
                    <Link href='/Reporting' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Reporting</Link>
                    <Link href='/Doc' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Documentation</Link>
                    <Link href='/S&P' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Support Policy</Link>
                    <Link href='/Privacy' className="mt-[15.95px] font-Helvetica font-normal text-[16px] leading-6">Privacy</Link>
                </div>
                <div className="text-white flex flex-col">
                <h1 className="font-bold text-[20px] leading-7 font-Helvetica">Recent Post</h1>
                <div className="mt-[15.92px] flex gap-[16.05px]">
                    <Image src={bites} alt="chicken -bites-image" className="w-[80.94px] h-[79.74px]" />
                    <div>
                        <p className="font-Helvetica font-normal text-[16px] leading-6 w-[177.54px]">Is fastfood good for your body?</p>
                        <p className="mt-[4.98px] font-normal text-[16px] leading-6 w-[177.54px] text-white/[49%]">February 28,2022</p>
                    </div>
                    

                </div>
                <div className="mt-[15.95px] flex gap-[16.05px]">
                    <Image src={bites} alt="chicken -bites-image" className="w-[80.94px] h-[79.74px]" />
                    <div>
                        <p className="font-Helvetica font-normal text-[16px] leading-6 w-[177.54px]">Change your food habit With organic food</p>
                        <p className="mt-[4.98px] font-normal text-[16px] leading-6 w-[177.54px] text-white/[49%]">February 28,2022</p>
                    </div>
                    

                </div>
                <div className="mt-[15.95px] flex gap-[16.05px]">
                    <Image src={bites} alt="chicken -bites-image" className="w-[80.94px] h-[79.74px]" />
                    <div>
                        <p className="font-Helvetica font-normal text-[16px] leading-6 w-[177.54px]">Do you like fastfood for your life?</p>
                        <p className="mt-[4.98px] font-normal text-[16px] leading-6 w-[177.54px] text-white/[49%]">February 28,2022</p>
                    </div>
                    

                </div>

                </div>
                

            </div>

            </div>
            </div>
            <div className="bg-[#4F4F4F] h-[199px] md:h-[99px] grid content-center">
                <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:ml-[300px] flex flex-col gap-2 md:gap-0 md:flex-row justify-between pr-4">
                    <p className="font-normal text-[16px] leading-6 text-white">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    <div className="flex gap-[16.79px]">
                        <div className="w-[35.85px] h-[33px] rounded-sm bg-white place-content-center">
                            <FaFacebookF className="w-[10px] h-[18px] justify-self-center"/>
                            </div>
                        <div className="w-[35.85px] h-[33px] rounded-sm bg-white  place-content-center">
                            <FaTwitter className="w-[16px] h-[18px] justify-self-center"/>
                        </div>
                        <div className="w-[35.85px] h-[33px] rounded-sm bg-white  place-content-center">
                            <IoLogoInstagram className="w-[14px] h-[18px] justify-self-center"/>
                        </div>
                        <div className="w-[35.85px] h-[33px] rounded-sm bg-white  place-content-center">
                            <FaYoutube className="w-[18px] h-[18px] justify-self-center"/>
                        </div>
                        <div className="w-[35.85px] h-[33px] rounded-sm bg-white  place-content-center">
                            <FaPinterest className="w-[16px] h-[18px] justify-self-center"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}