
import Breaking from "../public/images/unnamed.jpg"
import Image, { StaticImageData } from "next/image"

interface CardValues{
  title:string,
  pic: StaticImageData
 
}

const CardHorizontal:React.FC<CardValues> =({title, pic})=> {
    return(
      <div className="h-20  flex flex-row box-border  shadow-lg rounded mt-8 backdrop:brightness-10 ml-2">
        <div className="object-center">
            <Image src={pic} alt="breaking news" width={80} height={80} className="p-2 object-center mt-2"  />
        </div>
        
        <div className="p-2 w-4/5 overflow-clip">
            
            <mark className="text-xs text-blue-800 bg-blue-100">{title}</mark>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, harum similique accusamus dolor quos aliquid dolorum fugiat fuga voluptatem vitae maxime reiciendis. </p>
            
        </div>
        
       
        
      </div>
    )
}
export default CardHorizontal