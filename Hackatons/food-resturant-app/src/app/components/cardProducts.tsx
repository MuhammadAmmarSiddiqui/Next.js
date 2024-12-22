import Image, { StaticImageData } from "next/image";

interface CardProps{
    image: StaticImageData,
    name: string,
    show?: string,
    actualRate: number,
    discountRate?: number,
}

const CardProducts = (props:CardProps) =>{
    const {image, name, actualRate, show, discountRate} = props
    return(
        <div>
            <Image src={image} alt="chef-images" className="w-[156px] md:w-[312px] h-[133.5px] md:h-[267px]"/>
            <p className="font-bold text-[18px] leading-[26px] text-[#333333]">{name}</p>
            <p className="font-normal text-[16px] leading-6 text-[#FF9F0D]">${actualRate}
                <span className={`text-[#828282] line-through ${show}`} >  ${discountRate}</span></p>
        </div>
    )
}
export default CardProducts;