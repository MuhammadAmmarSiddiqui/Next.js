import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import Footer from "./footer";

const great =Great_Vibes({
    subsets:["latin"],
    weight:'400',
})


const Chef =() =>{
    return(
        <div className="mt-[120px] grid place-content-center">
            <div>
                <h1 className={`${great.className} font-normal text-[32px] leading-10 text-[#FF9F0D] text-center`}>Chefs</h1>
                <h1 className="font-Helvetica text-[48px] leading-[56px] text-[#FF9F0D] font-bold text-center">Me<span className="text-white">et Our Chef</span></h1>
                
            </div>
            <div className="mt-[56px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-content-center">
                <div className="w-[312px] h-[391px] rounded-md bg-[url('/chefhome1.png')] bg-cover bg-center grid content-end">
                    <div className="w-[181px] h-[67px] bg-white py-2 px-4">
                        <h1 className="font-bold text-[18px] leading-[26px] text-[#333333]">D.Estwood</h1>
                        <p className="text-[14px] leading-[22px] text-[#333333]">Chef Chef</p>
                    </div>
                    
                </div>
                <div className="w-[312px] h-[391px] rounded-md bg-[url('/chefhome2.png')] bg-cover bg-center grid content-end">
                <div className="w-[181px] h-[67px] bg-white py-2 px-4">
                        <h1 className="font-bold text-[18px] leading-[26px] text-[#333333]">D.Estwood</h1>
                        <p className="text-[14px] leading-[22px] text-[#333333]">Chef Chef</p>
                    </div>
                </div>
                <div className="w-[312px] h-[391px] rounded-md bg-[url('/chefhome3.png')] bg-cover bg-center grid content-end">
                <div className="w-[181px] h-[67px] bg-white py-2 px-4">
                        <h1 className="font-bold text-[18px] leading-[26px] text-[#333333]">D.Estwood</h1>
                        <p className="text-[14px] leading-[22px] text-[#333333]">Chef Chef</p>
                    </div>
                </div>
                <div className="w-[312px] h-[391px] rounded-md bg-[url('/chefhome4.png')] bg-cover bg-center grid content-end">
                <div className="w-[181px] h-[67px] bg-white py-2 px-4">
                        <h1 className="font-bold text-[18px] leading-[26px] text-[#333333]">D.Estwood</h1>
                        <p className="text-[14px] leading-[22px] text-[#333333]">Chef Chef</p>
                    </div>
                </div>

            </div>
            <Link href='/Chef' className="justify-self-center"><button className="my-[56px] w-[153px] h-[50px] bg-transparent hover:bg-white text-[16px] leading-6 text-white hover:text-[#FF9F0D] border border-[#FF9F0D] rounded-[25px]">See More</button></Link>
            <Footer />
        </div>
    )
}
export default Chef;