import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import spoon from '../public/spoonwhite.png';
import burger from '../public/burger.png';
import fork from '../public/fork.png';
import donut from '../public/donut.png';

const great =Great_Vibes({
    subsets:["latin"],
    weight:'400',
})


export default function Category(){
    return(
        <div className="w-full mt-[120px]">
            <div className=" place-items-center">
                <div className="items-center">
                    <p className={`${great.className} text-[32px] font-normal text-[#FF9F0D] text-center leading-10`}>Food Category</p>
                    <p className="mt-2 font-Helvetica text-[#FF9F0D] text-[48px] leading-[56px] font-bold text-center ">Ch<span className="text-white">oose Food Iteam</span></p>
                </div>
                <div className="mt-[56px] ml-4 md:ml-[100px] xl:ml-[200px] 2xl:[300px] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 relative">
                    <Image src={spoon} alt='spoon-image'/>
                    <Image src={burger} alt='burger-image'/>
                    <Image src={fork} alt='fork-image'/>
                    <Image src={donut} alt='donut-image'/>
                    <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:ml-[300px] absolute inset-0 bg-[url('/leaves.png')] bg-cover bg-left rotate-[76.86] opacity-20 before:content-[''] before:absolute before:inset-0"></div>


                </div>
            </div>
            
        </div>
    )
}
