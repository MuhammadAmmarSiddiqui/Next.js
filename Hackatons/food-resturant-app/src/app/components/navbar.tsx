import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbagLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

interface CardProps{
    HomeClr?: string,
    MenuClr?: string,
    BlogClr?: string,
    PagesClr?: string,
    AboutClr?: string,
    ShopClr?: string,
    ContactClr?: string,
}

const Navbar = (props:CardProps)=>{
    const {HomeClr="text-white", MenuClr="text-white", BlogClr="text-white", PagesClr="text-white", AboutClr="text-white", ShopClr="text-white", ContactClr="text-white"} = props
    return(
        <div className="bg-black">
            <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:ml-[300px] py-[29px] pr-4 flex justify-between items-center">
                <div>
                    <GiHamburgerMenu className="bg-black text-[#FF9F0D] text-[24px] lg:hidden"/>
                </div>
                <div>
                    <h1 className="font-Helvetica font-bold text-[24px] leading-8 text-[#FF9F0D] ">Food<span className="text-white">tuck</span></h1>
                </div>
                <div className="hidden lg:flex lg:gap-5 lg:items-center ">
                    <Link href='/' className={`${HomeClr}`}>Home</Link>
                    <Link href='/Menu' className={MenuClr}>Menu</Link>
                    <Link href='/Blog' className={BlogClr}>Blog</Link>
                    <Link href='/Pages' className={PagesClr}>Pages</Link>
                    <Link href='/About' className={AboutClr}>About</Link>
                    <Link href='/Shop' className={ShopClr}>Shop</Link>
                    <Link href='/Contact' className={ContactClr}>Contact</Link>
                </div>
                <div className="flex gap-2 text-white text-[24px]">
                    <CiSearch />
                    <Link href='/SignUp'><GoPerson /></Link>
                    <Link href='/Cart'><PiHandbagLight /></Link>
                </div>
            </div>
            
        </div>
    )

}
export default Navbar
