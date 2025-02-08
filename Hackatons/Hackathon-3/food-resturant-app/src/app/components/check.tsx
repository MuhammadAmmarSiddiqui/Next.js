import Image, { StaticImageData } from "next/image"
interface Checked{
    image:string,
    title:string,
    price:number
}

const Check = (props:Checked) => {
    const{image,title,price} = props
return(
    <div className="w-[224px] md:w-[424px] px-6 pb-6">
    <div className="mt-6 flex flex-col md:flex-row gap-[15.04px]">
        <Image src={image} width={82.72} height={88} alt='prawns-image' className="w-[82.72px] h-[88px]"/>
        <div>
            <h2 className="font-Helvetica font-bold text-[16px] leading-6 text-[#333333]">{title}</h2>
            <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]"></p>
            <p className="font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">{price}$</p>
        </div>
        

    </div>
    </div>
)
}
export default Check;