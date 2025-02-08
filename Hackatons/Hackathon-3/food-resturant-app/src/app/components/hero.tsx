import { IoIosArrowForward } from "react-icons/io";

interface CardProps{
    heading: string,
    data: string,
};

const Hero=(props:CardProps)=>{
    const {heading, data} = props
    return(
        <div>
            <div className="w-full h-[320px] bg-[url('/errorImage.png')] bg-cover bg-center grid place-content-center">
                <div className="">
                    <h1 className="font-Helvetica text-[48px] leading-[56px] text-white">{heading}</h1>
                    <div className=" mt-5 flex justify-center">
                        <p className="font-normal text-[20px] leading-7 text-white">Home</p>
                        <IoIosArrowForward className="text-white place-self-center"/>
                        <p className="text-[#FF9F0D] font-normal text-[20px] leading-7"> {data}</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
export default Hero