import CardHorizontal from "../components/cardhorizon";
import { StaticImageData } from "next/image";
import image2 from "../public/images/unnamed.jpg";
import image1 from "../public/images/cat.jpg"

interface International {
    title: string;
    description: string;
    pic: StaticImageData
    
  }
export default function International(){
    const newsArticles: International[] = [
        { title: "International", description: "Details about breaking news 1.", pic:image1},
        { title: "Business", description: "Details about breaking news 2." , pic:image2},
        { title: "Science & Technology", description: "Details about breaking news 3.",pic:image1},
    ];
    return(
        <div>
            <CardHorizontal  title={newsArticles[0].title}  pic={image2} />
        </div>
    )
}