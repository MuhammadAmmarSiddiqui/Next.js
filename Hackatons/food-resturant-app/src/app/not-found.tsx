import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="404 Error" data="404"/>
            
            <div className="w-full h-[582px] grid place-content-center">
                <div>
                    <h1 className="font-Helvetica font-bold text-[#FF9F0D] text-[96px] leading-[104px] text-center">404</h1>
                    <p className="mt-8 font-Helvetica font-bold text-[32px] leading-10 text-center">Oops! Look likes something going wrong</p>
                    <p className="mt-6 font-normal leading-[26px] text-[18px] text-[#4F4F4F] text-center">Page Cannot be found! we’ll have it figured out in no time.</p>
                    <p className="font-normal leading-[26px] text-[18px] text-[#4F4F4F] text-center">Menwhile, cheek out these fresh ideas:</p>
                    <div className="mt-8 place-self-center">
                    <Link href='/' className=""><button className="bg-[#FF9F0D] text-white w-[197px] h-[58px] rounded-md font-Helvetica font-bold text-[18px] leading-8">Go to home</button></Link>
                    </div>
                    
                </div>


            </div>
            <Footer />
        </div>
    )
}