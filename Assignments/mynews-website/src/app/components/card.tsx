 import React from "react"
 import Image, { StaticImageData } from "next/image"
 /*import pic from "../public/images/unnamed.jpg"*/

 interface CardValues{
    title:string,
    description:string,
    pic: StaticImageData
   
 }
const Card:React.FC<CardValues> =({title, description, pic})=> {
    return(
        <div>
            <div className="w-3/4 rounded overflow-hidden shadow-lg ml-4">
            <Image src={pic} alt={title} width={200} height={150}   layout="responsive" objectFit="cover" className="m-2"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{description}</div>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-purple-200  px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">{title}</span>
    
  </div>
  </div>
        </div>
    )
}
export default Card