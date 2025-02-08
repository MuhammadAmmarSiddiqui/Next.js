'use client'
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const Pagination = () =>{
        const [count, setCount] = useState<number>(1);
         async function fetchData(){
            const response:number = await client.fetch(`count(*[_type == "food"])`);
            setCount(response/9);
            console.log(count);
        }
        useEffect(()=>{
            fetchData();
        },[]);
        // setCount(Math.ceil(count));
        // console.log(count);
        // for(let i=1; i<=count; count*i){
        //     console.log(i);
        // }
        return(
            <div></div>
        )
    // <div className="mt-[74px] flex flex-row gap-[14px] justify-self-center">
    //     <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center"><FaAngleDoubleLeft  className="text-[#FF9F0D]"/></button>
    //     <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center text-[#FF9F0D] font-normal text-[16px] leading-6">1</button>
    //     <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center bg-[#FF9F0D] text-white font-normal text-[16px] leading-6">2</button>
    //     <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center text-[#FF9F0D] font-normal text-[16px] leading-6">3</button>
    //     <button className="w-[50px] h-[50px] border-2 border-[#F2F2F2] grid place-content-center"><FaAngleDoubleRight className="text-[#FF9F0D]"/></button>
    // </div>
                    
}
export default Pagination;