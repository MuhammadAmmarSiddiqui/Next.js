import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Image from "next/image";
import prawns from "../public/prawns.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/footer";

export default function CheekOut(){
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Cheekout Page" data="Cheekout"/>
            <div className="grid place-content-center">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 my-[120px] justify-self-center">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 justify-self-center">
                        <div>
                            <h1 className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Shipping Address</h1>
                            <p className="mt-6 font-normal text-[16px] leading-6 text-[#333333]">First name</p>
                            <input type="name" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Email Address</p>
                            <input type="email" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Company</p>
                            <input type="text" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">City</p>
                            <input type="text" className="w-[166px] md:w-[324px] border border-[#E0E0E0] p-1 text-[#333333] font-Helvetica text-[16px] leading-6 font-normal" placeholder="Choose City"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Address 1</p>
                            <input type="text" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>
                        </div>
                        <div>
                             <p className="mt-[52px] font-normal text-[16px] leading-6 text-[#333333]">Last name</p>
                            <input type="name" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Phone Number</p>
                            <input type="number" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Country</p>
                            <input type="name" className="w-[166px] md:w-[324px] p-1 border border-[#E0E0E0] text-[#333333] font-Helvetica text-[16px] leading-6 font-normal" placeholder="Choose Country"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Zip Code</p>
                            <input type="number" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Address 2</p>
                            <input type="name" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            
                        </div>
                        <div className="col-span-1 lg:col-span-2">
                            
                            <h1 className="text-[20px] leading-7 font-Helvetica font-bold text-[#333333]">Billing Address</h1>
                            <div className="flex">
                                <div className="w-5 h-5 border border-[#BDBDBD]"></div>
                                <p className="ml-1 font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">Same as shipping address</p>
                            </div>
                            <div className="mt-6 flex flex-col lg:flex-row gap-6">
                                <button className="w-[166px] md:w-[324px] h-[56px] flex items-center  border border-[#E0E0E0] font-Helvetica font-normal text-[16px] leading-6 text-[#4F4F4F] justify-around"><MdKeyboardArrowLeft /> Back to cart</button>
                                <button className="w-[166px] md:w-[324px] h-[56px] flex items-center  border border-[#E0E0E0] font-Helvetica font-normal text-[16px] leading-6 text-white bg-[#FF9F0D] justify-around">Proceed to shipping <MdKeyboardArrowRight /></button>
                            </div>
                        </div>

                    </div>
                    <div className="w-[224px] md:w-[424px] border border-[#E0E0E0] px-6 pb-6">
                        <div className="mt-6 flex flex-col md:flex-row gap-[15.04px]">
                            <Image src={prawns} alt='prawns-image' className="w-[82.72px] h-[88px]"/>
                            <div>
                                <h2 className="font-Helvetica font-bold text-[16px] leading-6 text-[#333333]">Chicken Tikka Kabab</h2>
                                <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">150 gm net</p>
                                <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">50$</p>
                            </div>
                            

                        </div>
                        <div className="mt-6 flex flex-col md:flex-row gap-[15.04px]">
                            <Image src={prawns} alt='prawns-image' className="w-[82.72px] h-[88px]"/>
                            <div>
                                <h2 className="font-Helvetica font-bold text-[16px] leading-6 text-[#333333]">Chicken Tikka Kabab</h2>
                                <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">150 gm net</p>
                                <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">50$</p>
                            </div>
                            

                        </div>
                        <div className="mt-6 flex flex-col md:flex-row gap-[15.04px]">
                            <Image src={prawns} alt='prawns-image' className="w-[82.72px] h-[88px]"/>
                            <div>
                                <h2 className="font-Helvetica font-bold text-[16px] leading-6 text-[#333333]">Chicken Tikka Kabab</h2>
                                <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">150 gm net</p>
                                <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">50$</p>
                            </div>
                            

                        </div>

                        <div className="mt-6 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Sub-total</p>
                            <p className="">130$</p>
                        </div>
                        <div className="mt-4 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Shipping</p>
                            <p className="">Free</p>
                        </div>
                        <div className="mt-4 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Discount</p>
                            <p className="">25%</p>
                        </div>
                        <div className="mt-4 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Tax</p>
                            <p className="">54.76$</p>
                        </div>
                        <hr className="border border-[#E0E0E0] mt-4"/>
                        <div className="mt-4 flex justify-between font-Helvetica text-[18px] text-[#333333] leading-[26px]">
                            <p className="font-normal">Total</p>
                            <p className="font-bold">54.76$</p>
                        </div>
                        <button className="mt-4 rounded-md bg-[#FF9F0D] text-white h-[58px] w-[188px] md:w-[376px] flex items-center justify-center">Place an Order <FaArrowRightLong /></button>

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}