import Image from "next/image";
import chef from '../public/chef.png';
import items from '../public/fooditems.png';
import forkSpoon from '../public/forkspoon.png';
import pizza from '../public/pizza.png';

export default function Clients(){
    return(
        <div className="mt-[120px] h-[1000px] lg:h-[469px] w-full relative font-Helvetica text-white">
            <div className="absolute inset-0 bg-[url('/chicken.png')] bg-cover bg-center opacity-10 before:content-[''] before:absolute before:inset-0"></div>

            <div className="h-[1000px] lg:h-[469px]  ml-4 md:ml-[100px] xl:ml-[200px] 2xl:[300px] mt-[112px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 content-center">
                <div className="place-items-center">
                    <Image src={chef} alt="chef-image" className=""/>
                    <p className="mt-6 font-bold text-[24px] leading-8">Professional Chefs</p>
                    <p className="mt-[23px] font-bold text-[40px] leading-10">420</p>
                </div>
                <div className="place-items-center">
                    <Image src={items} alt="food-items-image" className=""/>
                    <p className="mt-6 font-bold text-[24px] leading-8">Items Of Food</p>
                    <p className="mt-[23px] font-bold text-[40px] leading-10">320</p>
                </div>
                <div className="place-items-center">
                    <Image src={forkSpoon} alt="fork-spoon-image" className=""/>
                    <p className="mt-6 font-bold text-[24px] leading-8">Years Of Experienced</p>
                    <p className="mt-[23px] font-bold text-[40px] leading-10">30+</p>
                </div>
                <div className="place-items-center">
                    <Image src={pizza} alt="pizza-image" className=""/>
                    <p className="mt-6 font-bold text-[24px] leading-8">Happy Customers</p>
                    <p className="mt-[23px] font-bold text-[40px] leading-10">220</p>
                </div>


            </div>

        </div>
    )
}