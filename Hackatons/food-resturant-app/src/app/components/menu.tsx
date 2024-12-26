import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import green from "../public/green.png";
import Lettuce from '../public/lettuce.png';

const great =Great_Vibes({
    subsets:["latin"],
    weight:'400',
})


const Menu = () =>{
    return(
        <div className="mt-[120px] grid place-content-center">
            <div>
                <h1 className={`${great.className} font-normal text-[32px] leading-10 text-[#FF9F0D] text-center`}>Choose & pick</h1>
                <h1 className="font-Helvetica text-[48px] leading-[56px] text-[#FF9F0D] font-bold text-center">Fr<span className="text-white">om Our Menu</span></h1>
                
            </div>
            <div className="mt-[56px] w-full font-bold text-[20px] leading-7 text-white flex flex-col md:flex-row md:justify-between justify-center font-inter">
                <p className="text-[#FF9F0D] text-center">Breakfast</p>
                <p className="text-center">Lunch</p>
                <p className="text-center">Dinner</p>
                <p className="text-center">Desert</p>
                <p className="text-center">Drink</p>
                <p className="text-center">Snacks</p>
                <p className="text-center">Soups</p>
            </div>
            <div className="mt-[56px] flex flex-col md:flex-row gap-4">
                <div className="w-[515px] h-[406px] bg-[url('/leafs.png')] bg-cover bg-center grid place-content-center">
                    <Image src={green} alt="food-image"/>

                </div>
                <div>
                    <div className="flex gap-4 mt-4">
                        <Image src={Lettuce} alt='burger_image' className="w-[80px] h-[79px]"/>
                        <div>
                            <p className="font-bold text-[20px] leading-[28px] text-white">Lettuce Leaf</p>
                            <p className="text-[14px] leading-[22px] text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    
                            <p className=" font-bold text-[18px] leading-[26px] text-[#FF9F0D]">$12.5</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Image src={Lettuce} alt='burger_image' className="w-[80px] h-[79px]"/>
                        <div>
                            <p className="font-bold text-[20px] leading-[28px] text-white">Lettuce Leaf</p>
                            <p className="text-[14px] leading-[22px] text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    
                            <p className=" font-bold text-[18px] leading-[26px] text-[#FF9F0D]">$12.5</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Image src={Lettuce} alt='burger_image' className="w-[80px] h-[79px]"/>
                        <div>
                            <p className="font-bold text-[20px] leading-[28px] text-white">Lettuce Leaf</p>
                            <p className="text-[14px] leading-[22px] text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    
                            <p className=" font-bold text-[18px] leading-[26px] text-[#FF9F0D]">$12.5</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 mt-4">
                        <Image src={Lettuce} alt='burger_image' className="w-[80px] h-[79px]"/>
                        <div>
                            <p className="font-bold text-[20px] leading-[28px] text-white">Lettuce Leaf</p>
                            <p className="text-[14px] leading-[22px] text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    
                            <p className=" font-bold text-[18px] leading-[26px] text-[#FF9F0D]">$12.5</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Image src={Lettuce} alt='burger_image' className="w-[80px] h-[79px]"/>
                        <div>
                            <p className="font-bold text-[20px] leading-[28px] text-white">Lettuce Leaf</p>
                            <p className="text-[14px] leading-[22px] text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    
                            <p className=" font-bold text-[18px] leading-[26px] text-[#FF9F0D]">$12.5</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Image src={Lettuce} alt='burger_image' className="w-[80px] h-[79px]"/>
                        <div>
                            <p className="font-bold text-[20px] leading-[28px] text-white">Lettuce Leaf</p>
                            <p className="text-[14px] leading-[22px] text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
                                    
                            <p className=" font-bold text-[18px] leading-[26px] text-[#FF9F0D]">$12.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Menu;