import Image, { StaticImageData } from "next/image";

interface CardProps{
    image: StaticImageData,
    name: string,
}

const Card = (props:CardProps) =>{
    const {image, name} = props
    return(
        <div>
            <Image src={image} alt="chef-images" className="w-[312px] h-[379.17px]"/>
            <p className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333] text-center">{name}</p>
            <p className="font-normal text-[18px] leading-[26px] text-[#333333] text-center">Chef</p>
        </div>
    )
}
export default Card;