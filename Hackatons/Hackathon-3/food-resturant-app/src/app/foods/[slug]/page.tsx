'use client'
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Image from "next/image";
import fries from "@/app/public/friesboti.png";
import salad from "@/app/public/salad1.png";
import chicken from "@/app/public/salan.png";
import salad2 from "@/app/public/salad3.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaYoutubeSquare } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import wIcon from "@/app/public/Vector.png";
import { RiInstagramFill } from "react-icons/ri";
import CardProducts from "@/app/components/cardProducts";
import Lime from "@/app/public/freshLime.png";
import muffin from "@/app/public/chocoMuffin.png";
import burger from "@/app/public/smallbg.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Footer from "@/app/components/footer";
import { client } from '@/sanity/lib/client'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }> 
    }




export default function ShopDetail({params}:Props){
    const [products, setProducts] = useState<FoodItem[]>([]);
    const fetchData = async ({params}:Props) => {
        const { slug } = await params;
        const response:any = await client.fetch(`*[_type == "food" && slug.current=="${slug}"]{_id, name, price, originalPrice,
            "imageUrl": image.asset->url, "slug":slug.current, available, description, category}`)
            setdata(response[0]);
            const categoryData:any = await client.fetch(`*[_type=="food" && category == "${response[0].category}"][0..2]
                {name,category,price,originalPrice,"slug":slug.current,"imageUrl": image.asset->url, _id}`);
                console.log(response[0].category)
            console.log(categoryData);
            setProducts(categoryData);
            console.log(products);
    }

    const [data, setdata] = useState<FoodItem | null>(null);
   
    useEffect(()=>{
        fetchData({params});
    },[]);
    let value = ""

        if(data && data.available==true){
             value = "In Stock";
        }
        else{
             value = "Out of Stock"
        };
        interface FoodItem {
            _id: string;
            name: string;
            price: number;
            originalPrice: number;
            imageUrl: string;
            slug: string;
            available: boolean;
            description: string;
            quantity?: number;
            category:string;
        }


        const handleClick = (data: FoodItem) => {
           try{ const cart = JSON.parse(localStorage.getItem('cart') || '{}');
            if (cart[data.name]) {
                cart[data.name] = {
                    ...cart[data.name],
                    quantity: (cart[data.name].quantity || 0) + 1,
                };
            } else {
                cart[data.name] = { ...data, quantity: 1 };
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            toast.success(`Product successfully added to cart`, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
        }
            
            catch(error){
                toast.error(`Error adding product to cart! ${error}`, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
                                });
            }
        };
    return(
        <div>
            <Navbar ShopClr="text-[#FF9F0D]"/>
            <Hero heading="Shopping Cart" data="Shopping cart"/>
            <div className="ml-4 md:mx-[100px] xl:ml-[200px] 2xl:[300px] my-[120px]">
                <div className="flex flex-col xl:flex-row gap-[62px] place-items-center">
                    <div className="grid grid-cols-4 grid-rows-1 xl:grid-rows-4 xl:grid-cols-1 gap-6 order-2 xl:order-1">
                        <Image src={fries} alt="fries-image"/>
                        <Image src={salad} alt="fries-image" className=""/>
                        <Image src={chicken} alt="fries-image" className=""/>
                        <Image src={salad2} alt="fries-image" className=""/>
                    </div>
                    <div className="order-1 xl:order-2">
                        {data && <Image src={data.imageUrl} alt="egg-image" width={491} height={596}/>}
                    </div>
                    <div className="order-3">
                        <div className="flex justify-between">
                            <div className="w-[86px] h-7 rounded-md bg-[#FF9F0D] text-white font-normal text-[14px] leading-[22px] text-center items-center">{value}</div>
                            <div className="font-normal text-[18px] leading-[26px] text-[#828282] flex">
                                <FaArrowLeftLong />
                                <p>Prev</p>
                                <p className="ml-4">Next </p>
                                <FaArrowRightLong />
                                
                            </div>
                        </div>
                        <h1 className="font-Helvetica font-bold text-[48px] leading-[56px] text-[#333333]">{data ? data.name :''}</h1>
                        <p className="mt-6 font-normal text-[18px] leading-[26px] text-[#4F4F4F] w-[280px] md:w-[608px]">{data ? data.description : ''}</p>
                        <hr className="mt-8 border border-[#E0E0E0]"/>
                        <h1 className="mt-8 font-Helvetica font-bold text-[32px] leading-[56px] text-[#333333]">{data ? data.price : ''}$</h1>

                        <div className="flex gap-[14px] items-center">
                            <div className="text-[#FF9F0D] flex gap-1">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <hr className="h-4 w-[1px] bg-[#A9A9A9]"/>
                            <p className="text-[16px] font-normal leading-6 text-[#828282]">5.0 Rating</p>
                            <hr className="h-4 w-[1px] bg-[#A9A9A9]"/>
                            <p className="text-[16px] font-normal leading-6 text-[#828282]">22 Review</p>
                        </div>

                        <p className="text-[18px] leading-[26px] text-[#333333] mt-[22px]">Dictum/cursus/Risus</p>

                        <div className="mt-[25px] flex flex-wrap md:flex-nowrap gap-4 items-center">
                            <div className="flex">
                                <div className="w-[62px] h-[50px] border border-[#828282] text-[#1F242E] text-[20px] grid place-content-center text-center">-</div>
                                <div className="w-[62px] h-[50px] border border-[#828282] grid place-content-center font-Helvetica text-[20px] leading-7 text-[#333333] font-bold">1</div>
                                <div onClick={()=> data && handleClick(data)} className="w-[62px] h-[50px] border border-[#828282] grid place-content-center text-[#1F242E] text-[20px]">+</div>
                            </div>
                            <button onClick={() => data && handleClick(data)} className="w-[191px] h-[50px] bg-[#FF9F0D] text-white font-normal text-[18px] leading-[26px] flex justify-center gap-2 items-center">
                                <PiHandbagLight  />
                                Add to Cart
                            </button>
                            
                        </div>
                        <hr className="mt-[34px] border border-[#E0E0E0]"/>

                        <div className="mt-6 font-normal text-[18px] leading-[26px] text-[#4F4F4F] flex items-center">
                            <FaRegHeart />
                            <p className="ml-2">Add to Wishlist</p>
                            <div className="flex items-center ml-4">
                                <IoIosGitCompare />
                                <p className="ml-2">Compare</p>
                            </div>


                        </div>
                        <p className="mt-2 font-normal text-[18px] leading-[26px] text-[#333333]">Category: <span className="text-[#4F4F4F]">{data && data.category}</span></p>
                        <p className="mt-2 font-normal text-[18px] leading-[26px] text-[#333333]">Tag: <span className="text-[#4F4F4F]">Our Shop</span></p>

                        <div className="mt-6 flex items-center">
                            <p className="font-normal text-[18px] leading-[26px] text-[#333333]">Share : </p>
                            <div className="flex gap-4 ml-1 items-center">
                                <FaYoutubeSquare className="rounded-full text-[#4F4F4F] text-[24px]"/>
                                <MdFacebook  className="text-[#4F4F4F] text-[24px]"/>
                                <AiFillTwitterCircle className="text-[#4F4F4F] text-[24px]"/>
                                <Image src={wIcon} alt="icon" className="w-[24px] h-[24px]"/>
                                <RiInstagramFill className="text-[#4F4F4F] text-[24px]"/>
                            </div>
                        </div>
                        <hr className="mt-[34px] border border-[#E0E0E0]"/>

                        

                        

                    </div>
                </div>
                <div className="mt-[56px]">
                    <div className="flex items-center">
                        <div className="w-[165px] h-[50px] text-white bg-[#FF9F0D] font-Helvetica font-normal text-[16px] leading-6 grid place-content-center">
                            Description
                        </div>
                        <div className="w-[165px] h-[50px] font-Helvetica font-normal text-[16px] leading-6 text-[#333333] grid place-content-center">
                            Reviews (24)
                        </div>
                    </div>

                    <p className="w-full mt-8 font-normal text-[16px] leading-6 text-[#828282]">
                        Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                    </p>

                    <p className="w-full mt-6 font-normal text-[16px] leading-6 text-[#828282]">
                    Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
                    </p>

                    <div className="mt-6 text-[#4F4F4F]">
                        <p className="font-Helvetica font-normal text-[16px] leading-6">Key Benefits</p>
                        <ul className="mt-4 list-disc font-normal text-[14px] leading-[22px] text-[#4F4F4F] gap-2 pl-4">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                            <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                            <li>Mauris eget diam magna, in blandit turpis.</li>
                        </ul>
                    </div>

                    <div className="mt-[120px] flex justify-between items-center">
                    <h1 className="font-Helvetica font-bold text-[32px] leading-10 text-[#333333]">Similar Products</h1>
                    <div className="flex gap-1 items-center">
                        <BsArrowLeftCircleFill className="text-[40px] text-[#828282]"/>
                        
                        <BsArrowRightCircleFill className="text-[40px] text-[#FF9F0D]"/>
                    </div>
                    </div>
                    
                    <div className={`mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6`}>
                       {products && products.map((item:any)=>{
                            return <Link  key={item._id} href={`${item.slug}`}><CardProducts image={item.imageUrl} name={item.name} actualRate={item.originalPrice} discountRate={item.price}/></Link> 
                       })}
                       
                        {/* <CardProducts image={Lime} name="Fresh Lime" actualRate={38} discountRate={45}/>
                        <CardProducts image={muffin} name="Chocolate Muffin" actualRate={28} show="hidden"/>
                        <CardProducts image={burger} name="Burger" actualRate={21} show="hidden"/>
                        <CardProducts image={Lime} name="Fresh Lime" actualRate={38} discountRate={45}/> */}

                    </div>
                    
                </div>
            </div>
            <Footer />
            <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
        </div>
    )
}