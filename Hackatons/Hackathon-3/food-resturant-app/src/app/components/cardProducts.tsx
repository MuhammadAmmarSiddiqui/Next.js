import Image, { StaticImageData } from "next/image";

interface CardProps{
    image: string,
    name: string,
    show?: string,
    actualRate: number,
    discountRate?: number,
}

const CardProducts = (props:CardProps) =>{
    const {image, name, actualRate, show, discountRate} = props
    return(
        <div>
            <div className="w-[156px] md:w-[280px] h-[133.5px] md:h-[267px]"><Image src={image} alt="chef-images" layout="fixed" width={280} height={267} className="w-[156px] md:w-[280px] h-[133.5px] md:h-[267px]"/></div>
            
            <p className="font-bold text-[18px] leading-[26px] text-[#333333]">{name}</p>
            <p className="font-normal text-[16px] leading-6 text-[#FF9F0D]">${actualRate}
                <span className={`text-[#828282] line-through ${show}`} >  ${discountRate}</span></p>
        </div>
    )
}
export default CardProducts;