import { Great_Vibes } from "next/font/google";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import eggimage from "../public/egg2.png"
import sauce from "../public/sauce.png";
import toast from "../public/toast.png";
import eggImg from '../public/Image-egg.png';
const great =Great_Vibes({
    subsets:["latin"],
    weight:'400',
})

export default function AboutUs(){
    return(
        <div className="mt-[120px] w-full">
            <div className="ml-4 md:ml-[100px] xl:ml-[200px] 2xl:[300px] flex flex-col xl:flex-row justify-around items-center">
                <div className="w-full md:w-[562px]">
                    <p className={`${great.className} text-[32px] font-normal text-[#FF9F0D] leading-10`}>About Us</p>
                    <p className="mt-2 text-[#FF9F0D] font-bold text-[48px] leading-[56px]">We<span className="text-white"> Create the best foody product</span></p>
                    <p className="mt-8 font-normal text-[16px] leading-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <div className="mt-6 flex items-center">
                        <FaCheck  className=" text-white"/>
                        <p className="ml-[10px] text-white font-normal text-[18px] leading-[26px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    
                    </div>
                    <div className="mt-6 flex items-center">
                        <FaCheck  className=" text-white"/>
                        <p className="ml-[10px] text-white font-normal text-[18px] leading-[26px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    
                    </div>
                    <div className="mt-6 flex items-center">
                        <FaCheck  className=" text-white"/>
                        <p className="ml-[10px] text-white font-normal text-[18px] leading-[26px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    
                    </div>
                    <button className="rounded-[30px] bg-[#FF9F0D] w-[190px] h-[60px] mt-8 text-[16px] leading-6 text-white">Read More</button>
                   
                </div>
                <div className="flex flex-col justify-between items-center mt-[10px] xl:mt-0">
                        <Image src={eggimage} alt="egg-image" className="items-center w-[322px] md:w-[660px]"/>
                        <div className="flex flex-col md:flex-row  mt-[10px] gap-2 place-content-center " >
                            <Image src={sauce} alt="sauce-image"  className="md:w-[300px] 2xl:w-auto h-auto object-contain"/>
                            <Image src={toast} alt="toast-image" className="md:w-[300px] 2xl:w-auto h-auto"/>
                        </div>

                    
                    
                </div>
            </div>
        </div>
    )
}