import { StaticImageData } from "next/image";
import Card from "../components/card";
import images from "../public/images/cat.jpg"

interface NewsArticle {
    title: string;
    description: string;
    pic: StaticImageData
    
  }
  const SciTech: React.FC = () => {
    const newsArticles: NewsArticle[] = [
        { title: "Breaking News 1", description: "Details about breaking news 1.", pic:images},
        { title: "Breaking News 2", description: "Details about breaking news 2." , pic:images},
        { title: "Breaking News 3", description: "Details about breaking news 3.",pic:images },
    ];
    return (
        <div >
          
            <Card  title={newsArticles[0].title} description={newsArticles[0].description} pic={newsArticles[0].pic} />
         
           {/* {newsArticles.map((article, index) => (*/}
                
          {/*  ))}}*/}
          
          
        </div>
    );
  
  };
  export default SciTech