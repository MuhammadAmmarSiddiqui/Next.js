import Navbar from "../components/navbar";
import Hero from "../components/hero";
import CardProducts from "../components/cardProducts";
import Lime from "../public/freshLime.png";
import muffin from "../public/chocoMuffin.png";
import burger from "../public/smallbg.png";
import country from "../public/burger_country.png";
import drink from "../public/Drink.png";
import pizza from "../public/PizzaLarge.png";
import butter from "../public/cheese.png";
import sandwich from "../public/sandwich.png";
import chup from "../public/chickenchup.png";
import { CiSearch } from "react-icons/ci";
import Ad from "../public/Ad.png";
import Image from "next/image";
import shopItem from "../public/shopitem.png";
import { FaStar } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Footer from "../components/footer";
import Link from "next/link";

export default function Shop(){
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Our Shop" data="Shop"/>
            <div className="grid place-content-center my-[120px]">
                <div className="flex flex-col md:flex-row gap-[33px]">
                    <div>
                        <label className="font-normal text-[20px] leading-7 text-[#333333]">Sort By: </label>
                        <select className="w-2/3 md:w-[236px] border border-[#E0E0E0] h-[46px] rounded-md text-[#BDBDBD]">
                            <option>Newest</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-normal text-[20px] leading-7 text-[#333333]">Show: </label>
                        <select className="w-2/3 md:w-[236px] border border-[#E0E0E0] h-[46px] rounded-md text-[#BDBDBD]">
                            <option>Default</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                        <Link href='ShopDetails'><CardProducts image={Lime} name="Fresh Lime" actualRate={38} discountRate={45}/></Link>
                        <CardProducts image={muffin} name="Chocolate Muffin" actualRate={28} show="hidden"/>
                        <CardProducts image={burger} name="Burger" actualRate={21} show="hidden"/>

                        <CardProducts image={country} name="Burger" actualRate={45} show="hidden"/>
                        <CardProducts image={drink} name="Fresh Lime" actualRate={23} discountRate={45}/>
                        <CardProducts image={pizza} name="Burger" actualRate={43} show="hidden"/>

                        <CardProducts image={butter} name="Burger" actualRate={10} show="hidden"/>
                        <CardProducts image={sandwich} name="Burger" actualRate={25} show="hidden"/>
                        <CardProducts image={chup} name="Burger" actualRate={12} show="hidden"/>

                        <CardProducts image={country} name="Burger" actualRate={45} show="hidden"/>
                        <CardProducts image={drink} name="Fresh Lime" actualRate={23} discountRate={45}/>
                        <CardProducts image={pizza} name="Burger" actualRate={43} show="hidden"/>

                        <CardProducts image={butter} name="Burger" actualRate={10} show="hidden"/>
                        <CardProducts image={sandwich} name="Burger" actualRate={25} show="hidden"/>
                        <CardProducts image={chup} name="Burger" actualRate={12} show="hidden"/>

                    </div>
                    <div className="w-[312px] border border-[#F2F2F2] rounded-md p-[30px] hidden lg:inline-grid">
                        <div className="flex">
                            <input type="text" name="text" id="text" placeholder="Search Product" className="w-[202px] h-[46px] bg-[#FF9F0D]/10 text-[16px] text-[#828282] leading-6 pl-5" />
                            <button className="w-[46px] h-[46px] bg-[#FF9F0D] text-[20px] text-white grid place-content-center"><CiSearch /></button>
                        </div>
                        <h1 className="mt-6 font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Category</h1>
                        <div className="mt-6 grid gap-4">
                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Sandwiches</label><br />
                            </div>
                            
                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Burger</label><br />
                            </div>
                            
                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Chicken</label><br />
                            </div>

                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Drink</label><br />
                            </div>

                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Pizza</label><br />
                            </div>

                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Thi</label><br />
                            </div>

                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Non Veg</label><br />
                            </div>

                            <div>
                                <input type="checkbox" />
                                <label className="font-Helvetica font-normal text-[18px] leading-[26px] pl-2 text-[#333333]"> Uncategorized</label><br />
                            </div>


                        </div>
                        <Image src={Ad} alt="Ad" className="mt-6"/>
                        <h1 className="mt-6 font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Filter By Price</h1>
                        <div className="flex gap-1 items-center mt-4">
                            <div className="rounded-full bg-[#FF9F0D] w-[10.29px] h-[11px]"></div>
                            <hr className="grow border-[5px] border-[#FF9F0D]"/>
                            <div className="rounded-full bg-[#FF9F0D] w-[10.29px] h-[11px]"></div>

                        </div>
                        <div className="mt-2 flex text-[#1E1E1E]/[0.61] fort-normal text-[16px] leading-6 justify-between">
                            <p>From $0 to $8000</p>
                            <p>Filter</p>
                        </div>
                        <h1 className="mt-6 font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Filter By Price</h1>
                        <div className="flex gap-4 mt-6">
                            <Image src={shopItem} alt='burger_image' className="w-[93.14px] h-[97.13px]"/>
                                <div>
                                    <p className="font-Helvetica font-normal text-[16px] leading-[22px] text-[#4F4F4F]">Pizza</p>
                                    <div className="flex gap-1 mt-2">
                                        <FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#E0E0E0]"/><FaStar className="text-[#E0E0E0]"/>
                                    </div>
                                    <p className="mt-2 font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">$35</p>
                                </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Image src={shopItem} alt='burger_image' className="w-[93.14px] h-[97.13px]"/>
                                <div>
                                    <p className="font-Helvetica font-normal text-[16px] leading-[22px] text-[#4F4F4F]">Cupchake</p>
                                    <div className="flex gap-1 mt-2">
                                        <FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#E0E0E0]"/><FaStar className="text-[#E0E0E0]"/>
                                    </div>
                                    <p className="mt-2 font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">$35</p>
                                </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Image src={shopItem} alt='burger_image' className="w-[93.14px] h-[97.13px]"/>
                                <div>
                                    <p className="font-Helvetica font-normal text-[16px] leading-[22px] text-[#4F4F4F]">Cookies</p>
                                    <div className="flex gap-1 mt-2">
                                        <FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#E0E0E0]"/><FaStar className="text-[#E0E0E0]"/>
                                    </div>
                                    <p className="mt-2 font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">$35</p>
                                </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Image src={shopItem} alt='burger_image' className="w-[93.14px] h-[97.13px]"/>
                                <div>
                                    <p className="font-Helvetica font-normal text-[16px] leading-[22px] text-[#4F4F4F]">Burger</p>
                                    <div className="flex gap-1 mt-2">
                                        <FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#E0E0E0]"/><FaStar className="text-[#E0E0E0]"/>
                                    </div>
                                    <p className="mt-2 font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">$35</p>
                                </div>
                        </div>
                        <h1 className="mt-6 font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Product Tags</h1>

                        <div className="mt-6">
                            <div className="flex justify-between font-normal text-[16px] leading-6 text-[#4F4F4F] ">
                                <p className="border-b border-[#F2F2F2]">Services</p>
                                <p className="border-b border-[#F2F2F2]">Our Menu</p>
                                <p className="border-b border-[#F2F2F2]">Pizza</p>
                            </div>
                            <div className=" mt-4 flex justify-between font-normal text-[16px] leading-6 text-[#4F4F4F] ">
                                <p className="border-b border-[#F2F2F2]">Cupcake</p>
                                <p className="border-b border-[#FF9F0D] text-[#FF9F0D]">Burger</p>
                                <p className="border-b border-[#F2F2F2]">Cookies</p>
                            </div>
                            <div className="mt-4 flex justify-between font-normal text-[16px] leading-6 text-[#4F4F4F] ">
                                <p className="border-b border-[#F2F2F2]">Our Shop</p>
                                <p className="border-b border-[#F2F2F2]">TandooriChicken</p>
                                
                            </div>

                        </div>

    
                    </div>

                </div>
                <div className="mt-[74px] flex flex-row gap-[14px] justify-self-center">
                    <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center"><FaAngleDoubleLeft  className="text-[#FF9F0D]"/></button>
                    <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center text-[#FF9F0D] font-normal text-[16px] leading-6">1</button>
                    <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center bg-[#FF9F0D] text-white font-normal text-[16px] leading-6">2</button>
                    <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center text-[#FF9F0D] font-normal text-[16px] leading-6">3</button>
                    <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center"><FaAngleDoubleRight className="text-[#FF9F0D]"/></button>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}