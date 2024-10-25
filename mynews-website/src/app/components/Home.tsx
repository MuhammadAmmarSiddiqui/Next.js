import { StaticImageData } from "next/image";
import Card from "../components/card";
import Tech from "../public/images/Tech.jpg"
import Business from "../public/images/business.jpg"
import IntImage from "../public/images/international.jpg"
import CardHorizontal from "../components/cardhorizon";


interface NewsArticle {
  title: string;
  description: string;
  pic: StaticImageData
  
}

const HomePage: React.FC = () => {
  const newsArticles: NewsArticle[] = [
      { title: "International", description: "Lorem ipsum dolor sit amet.", pic:IntImage},
      { title: "Business", description: "Lorem ipsum dolor sit amet," , pic:Business},
      { title: "Science & Technology", description: "Lorem ipsum dolor sit amet,",pic:Tech},
  ];

  return (
    <div>
      <div className="ml-4 mt-12 flex flex-row flex-wrap">
        <div className="ml-10 w-96">
          <h1 className="font-extrabold text-2xl text-blue-500 mb-4 pb-6">|<span className="text-black pl-4 font-bold">Latest</span> </h1>
          <Card  title={newsArticles[0].title} description={newsArticles[0].description} pic={newsArticles[0].pic} />
        </div>
         {/* {newsArticles.map((article, index) => (*/}
              
        {/*  ))}}*/}
        <div className="basis-1/2 ml-14 h-96 mt-12">
            <CardHorizontal  title={newsArticles[0].title}  pic={newsArticles[0].pic}/>
            <CardHorizontal  title={newsArticles[1].title} pic={newsArticles[1].pic}/>
            <CardHorizontal  title={newsArticles[2].title}  pic={newsArticles[2].pic} />
            <CardHorizontal  title={newsArticles[0].title}  pic={newsArticles[0].pic} />

        </div>
        
      </div>
      <div className=" ml-4 mt-32 flex flex-row flex-wrap">
        <div className="ml-10 w-96">
          <h1 className="font-extrabold text-2xl text-blue-500 mb-4 pb-6">|<span className="text-black pl-4 font-bold">International</span> </h1>
          <Card  title={newsArticles[0].title} description={newsArticles[0].description} pic={newsArticles[0].pic} />
        </div>
         {/* {newsArticles.map((article, index) => (*/}
              
        {/*  ))}}*/}
        <div className="basis-1/2 ml-14 h-96 mt-12">
            <CardHorizontal  title={newsArticles[0].title}  pic={IntImage}/>
            <CardHorizontal  title={newsArticles[0].title}  pic={IntImage}/>
            <CardHorizontal  title={newsArticles[0].title}  pic={IntImage} />
            <CardHorizontal  title={newsArticles[0].title}  pic={IntImage} />

        </div>
        
      </div>
      <div className=" ml-4 mt-32 flex flex-row flex-wrap">
        <div className="ml-10 w-96">
          <h1 className="font-extrabold text-2xl text-blue-500 mb-4 pb-6">|<span className="text-black pl-4 font-bold">Business</span> </h1>
          <Card  title={newsArticles[1].title} description={newsArticles[1].description} pic={newsArticles[1].pic} />
        </div>
         {/* {newsArticles.map((article, index) => (*/}
              
        {/*  ))}}*/}
        <div className="basis-1/2 ml-14 h-96 mt-12">
            <CardHorizontal  title={newsArticles[1].title}  pic={Business}/>
            <CardHorizontal  title={newsArticles[1].title}  pic={Business}/>
            <CardHorizontal  title={newsArticles[1].title}  pic={Business} />
            <CardHorizontal  title={newsArticles[1].title}  pic={Business} />

        </div>
        
      </div>
      <div className=" ml-4 mt-32 flex flex-row flex-wrap">
        <div className="ml-10 w-96">
          <h1 className="font-extrabold text-2xl text-blue-500 mb-4 pb-6">|<span className="text-black pl-4 font-bold">Science & Technology</span> </h1>
          <Card  title={newsArticles[2].title} description={newsArticles[2].description} pic={newsArticles[2].pic} />
        </div>
         {/* {newsArticles.map((article, index) => (*/}
              
        {/*  ))}}*/}
        <div className="basis-1/2 ml-14 h-96 mt-12">
            <CardHorizontal  title={newsArticles[2].title}  pic={Tech}/>
            <CardHorizontal  title={newsArticles[2].title}  pic={Tech}/>
            <CardHorizontal  title={newsArticles[2].title}  pic={Tech} />
            <CardHorizontal  title={newsArticles[2].title}  pic={Tech} />

        </div>
        
      </div>
  </div>
  );

};
export default HomePage