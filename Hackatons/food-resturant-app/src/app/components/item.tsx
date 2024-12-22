import Image, { StaticImageData } from "next/image";

import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface CardProps{
    image: StaticImageData,
    name: string,
    price: string,
    total: string,
}

const Item =(props:CardProps) => {
    const {image, name, price, total} = props
    return(
        <div className="mt-8">
            <div className="grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 place-content-center">
                <div className="flex gap-4">
                    <Image src={image} alt='burger_image' className="w-[93.14px] h-[97.13px]"/>
                    <div>
                        <p>{name}</p>
                        <div className="flex gap-1 mt-2">
                            <FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#E0E0E0]"/><FaStar className="text-[#E0E0E0]"/>
                        </div>
                    </div>
                    
                </div>
                <div className="place-self-center">
                    <p className="font-Helvetica font-normal text-[16px] leading-6 text-[#333333] text-center">{price}</p>
                </div>
                
                <div className="rounded-[18px] h-8 border border-[#E0E0E0] flex justify-around items-center">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>

                </div>
                <div className="place-self-center">
                    <p className="font-bold text-[16px] leading-6 text-[#333333] text-center">{total}</p>
                </div>
                <div className="place-self-center">
                    <RxCross2 className="text-[20px]"/>
                </div>

                
            </div>
            <hr className="mt-[18px]"/>
        </div>
    )
}
export default Item;