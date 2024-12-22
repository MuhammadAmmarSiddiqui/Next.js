import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Item from "../components/item";
import burger from "../public/burger3.png";
import lime from "../public/burgerLime.png";
import donut from "../public/donut.png";
import muffin from "../public/muffin.png";
import cheese from "../public/cheese.png";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import Footer from "../components/footer";
import Link from "next/link";

export default function Cart(){
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Shopping Cart" data="Shopping cart"/>
            <div className="place-content-center px-1 pt-[120px]">
                <div className="hidden md:grid md:grid-cols-5">
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Product</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Price</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Quantity</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Total</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Remove</div>

                </div>
                <Item image={burger} name="Burger" price="$35" total="$221"/>
                <Item image={lime} name="Fresh Lime" price="$25" total="$521"/>
                <Item image={donut} name="Pizza" price="$15" total="$421"/>
                <Item image={muffin} name="chocolate Muffin" price="425" total="$521"/>
                <Item image={cheese} name="Cheese Butter" price="$15" total="$325"/>

            </div>
            <div className="place-content-center my-[120px] flex flex-wrap justify-center lg:flex-nowrap gap-6 ">
                <div className="w-[324px] md:w-[648px]">
                    <h1 className="font-Helvetica font-bold text-[32px] leading-10 text-[#333333]">Coupon Code</h1>
                    <div className="mt-6 rounded-md border border-[#E0E0E0] p-5">
                        <p className="font-normal text-[18px] leading-[26px] text-[#828282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                        <div className="flex mt-6">
                            <input type="text" name="text" placeholder="Enter Here Code" className="w-[176px] md:w-[509px] h-[62px] rounded-l-[6px] border border-[#E0E0E0] text-[16px] text-[#828282] leading-6 pl-5" />
                            <Link href=''><button className="w-[83px] md:w-[89px] h-[62px] text-white rounded-[6px] text-[18px] leading-6 font-normal bg-[#FF9F0D]">Apply</button></Link>
                        </div>

                    </div>
                    
                </div>
                <div className="w-[324px] md:w-[648px]">
                    <h1 className="font-Helvetica font-bold text-[32px] leading-10 text-[#333333]">Total Bill</h1>
                    <div className="mt-6 rounded-md border border-[#E0E0E0] p-5">
                        <div className="flex justify-between">
                            <p className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Cart Subtotal</p>
                            <p className="font-bold text-[18px] leading-[26px] text-[#333333]">$120</p>
                        </div>
                        <div className="mt-[15px] flex justify-between">
                            <p className="font-normal text-[18px] leading-[26px] text-[#4F4F4F]">Shipping Charge</p>
                            <p className="font-normal text-[18px] leading-[26px]  text-[#4F4F4F]">$0.00</p>
                        </div>
                        <hr className="mt-6 border border-[#BDBDBD]"/>
                        <div className="mt-[15px] flex justify-between">
                            <p className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Shipping Charge</p>
                            <p className="font-bold text-[18px] leading-[26px] text-[#333333]">$0.00</p>
                        </div>

                    </div>

                    <Link href='/CheekOut'><button className="w-full h-16 bg-[#FF9F0D] text-white mt-6 font-normal text-[18px] leading-[26px] flex justify-center gap-2 items-center">
                        Proceed to Checkout 
                        <PiCheckSquareOffsetBold  className="text-[18px]"/>
                        </button></Link>

                </div>

            </div>
            <Footer />
            
        </div>
    )
}