import Card from "../components/card";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
// import chef1 from "../public/chef1.png";
// import chef2 from "../public/chef2.png";
// import chef3 from "../public/chef3.png";
// import chef4 from "../public/chef4.png";
// import chef5 from "../public/chef5.png";
// import chef6 from "../public/chef6.png";
// import chef7 from "../public/chef7.png";
// import chef8 from "../public/chef8.png";
// import chef9 from "../public/chef9.png";
// import chef10 from "../public/chef10.png";
// import chef11 from "../public/chef11.png";
// import chef12 from "../public/chef12.png";
import Footer from "../components/footer";
import { client } from "@/sanity/lib/client";



export default async function Chefs(){
     const response = await client.fetch(`*[_type == "chef"]{_id, name,
                                                    "imageUrl": image.asset->url, "slug":slug.current}`)
            console.log(response);
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Our Chef" data="Chef"/>
            <div className="py-[120px] grid lg:grid-cols-3 xl:grid-cols-4 place-content-center">
                {response.map((chef:any)=>{
                    return <Card key={chef._id} image={chef.imageUrl} name={chef.name}/>
                })}

                    {/* <Card image={chef1} name="Tahmina Rumi"/>
                    <Card image={chef2} name="Jorina Begum"/>
                    <Card image={chef3} name="M.Mohammad"/>
                    <Card image={chef4} name="Munna Kathy"/>

                    <Card image={chef5} name="Tahmina Rumi"/>
                    <Card image={chef6} name="Bisnu devgon"/>
                    <Card image={chef7} name="Motin Molladsf"/>
                    <Card image={chef8} name="William Rumi"/>

                    <Card image={chef9} name="Kets william roy"/>
                    <Card image={chef10} name="Mahmud kholil"/>
                    <Card image={chef11} name="Ataur Rahman"/>
                    <Card image={chef12} name="Monalisa holly"/> */}


            </div>
            <Footer />
        </div>
    )
}