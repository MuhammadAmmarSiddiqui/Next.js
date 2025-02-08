'use client'
import Hero from "../components/hero";
import Navbar from "../components/navbar";
// import Image from "next/image";
// import prawns from "../public/prawns.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/footer";
import Check from "../components/check";
import { useState, useEffect, useRef } from "react";
import Product from "../types/product";
import Order from "../types/order";
import { client } from '@/sanity/lib/client'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "@clerk/nextjs";
// import { user } from '../components/MySever'
// import { useRouter } from "next/router";


export default function CheekOut(){
  const { user, isLoaded } = useUser();
  const [subtotal, setSubtotal] = useState(0);
  const [shipstate, setShipstate] = useState('hidden');
  const [order, setOrder] = useState<Order>({} as Order);

  // if (!isLoaded) return <p>Loading...</p>; // Prevent errors while loading
  // if (!user) return <p>No user found.</p>;
    // const user = await currentUser()
  
    // const inputFName = useRef<HTMLInputElement>(null);
    // const inputLName = useRef<HTMLInputElement>(null);
   // const inputEmail = useRef<HTMLInputElement>(null);
    const inputPhone = useRef<HTMLInputElement>(null);
    const inputCountry = useRef<HTMLInputElement>(null);
    const inputCity = useRef<HTMLInputElement>(null);
    const inputAddress1 = useRef<HTMLInputElement>(null);
    const inputAddress2 = useRef<HTMLInputElement>(null);
    const inputZipcode = useRef<HTMLInputElement>(null);
    const inputCompany = useRef<HTMLInputElement>(null);
    const hasMounted = useRef(false);
    const [isMounted, setIsMounted] = useState(false);
   
    
    // console.log(firstName);

    

    const placeOrder = async () =>{
      
        // const inputFname = inputFName?.current?.value as string;
        // const inputLname = inputLName?.current?.value as string;
       // const inputemail = inputEmail?.current?.value as string;
        const inputphone = parseInt(inputPhone?.current?.value as string, 10);
        const inputcountry = inputCountry?.current?.value as string;
        const inputcity = inputCity?.current?.value as string;
        const inputaddress1 = inputAddress1?.current?.value as string;
        const inputaddress2 = inputAddress2?.current?.value as string;
        const inputzipcode = inputZipcode?.current?.value as string;
        if (!user || !user.primaryEmailAddress) {
          console.error("User or user's primary email address is not available.");
          return;
      }
        const response:any = await client.fetch(`*[_type=="customer" && email == "${user.primaryEmailAddress?.emailAddress}"]{_id}`)
        // const inputcompany = inputCompany?.current?.value as string;
        
        // if(!inputFname){
        //     toast.error('First Name is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
        //         });
        //     return
        // }
        // if(!inputLname){
        //     toast.error('Last Name is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
        //     });
        //     return
        // }
        // if(!inputemail){
        //     toast.error('Email is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
        //     });
        //     return
        // }
        if(!inputphone){
            toast.error('Phone is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
            return
        }
        if(!inputcountry){
            toast.error('Country is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
            return
        }
        if(!inputcity){
            toast.error('Cityis Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
            return
        }
        if(!inputaddress1){
            toast.error('Address1 is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
            return
        }

        if(!inputzipcode){
            toast.error('Zip Code is Required!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
            return
        }
        let type = "customer";
        let reference = response[0]._id;

       await setOrder({ 
            _type:"order",
            dateTime: new Date().toISOString(),
            status: "pending",
            customer:{_type: type, _ref:reference},
          //  name: user?.firstName ?? "",
          //  lName: user?.lastName ?? '',
          //  email: user?.primaryEmailAddress?.emailAddress ?? '',
           phone: inputphone,
           country: inputcountry,
           city: inputcity,
           address1: inputaddress1,
           address2: inputaddress2,
           zipcode: inputzipcode,
           product_total: subtotal,
           products: newcart.map((product) => ({
            product_id: product._id,
            product_name: product.name,
            product_price: product.price,
            product_quantity: product.quantity,
           
            
           }))
           
           
       })



    }
    useEffect(() => {
      if (!isMounted) {
        setIsMounted(true);
        return; // Skip on first render
      }
        if(order){
          (async () => {
            // try {

            //   const orderUpdate = await client.create(order);
            //   if (orderUpdate) {
            //     localStorage.removeItem('cart');
            //     localStorage.removeItem('subtot');
                try{
                  const response = await fetch('/api/payment', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(subtotal)
                  })
                  const data = await response.json()
                  if(data.url){
                    sessionStorage.setItem('pending order', JSON.stringify(order));
                    window.location.href = data.url
                  }
                  else {
                    toast.error('Payment initiation failed', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        theme: 'colored',
                        transition: Bounce,
                    });}
                  // window.location.href = data.url
                  // toast.success('Order placed successfully!', {
                  //   position: 'bottom-right',
                  //   autoClose: 5000,
                  //   theme: 'colored',
                  //   transition: Bounce,
                  // });
                }
               catch(err){
                console.log(err);
               }
              // }
            // } catch (error) {
            //   console.error('Failed to create order:', error);
            // }
          })();
        } else {
          hasMounted.current = true;
        }
      }, [order]);
    useEffect(()=>{
        const subtot = JSON.parse(localStorage.getItem('subtot') || '{}');
        console.log(subtot);
        setSubtotal(subtot);
    },[]);

    
    const [newcart, setNewcart] = useState<Product[]>([]);
    useEffect(() => {
        try {
          const cart = JSON.parse(localStorage.getItem('cart') || '{}');
          // Convert object to array
          if (cart && typeof cart === "object") {
            const cartArray = Object.entries(cart).map(([_id, details]: [string, any]) => ({
              _id: details._id, // Use product name as id for now
              name: details.name,
              price: details.price || 0,
              quantity: details.quantity || 1, // Default quantity to 1 if not present
              imageUrl: details.imageUrl
            }));
    
            setNewcart(cartArray);
            
          } else {
            console.warn("Cart data in localStorage is not a valid object, resetting to an empty cart.");
            setNewcart([]);
          }
        } catch (error) {
          console.error("Failed to parse cart data from localStorage:", error);
          setNewcart([]);
        }
      }, []);

      const placeorder = async () => {
        try{
           const orderUpdate = await client.create(order);
           if(orderUpdate){
            localStorage.removeItem('cart');
            localStorage.removeItem('subtot');
            toast.success('Order placed successfully!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
            });
           }
        } catch(error) {
            console.log('Failed to create order', error);
        }
        
      }
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Cheekout Page" data="Cheekout"/>
            <div className="grid place-content-center">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 my-[120px] justify-self-center">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 justify-self-center">
                        <div>
                            <h1 className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Shipping Address</h1>
                            {/* <p className="mt-6 font-normal text-[16px] leading-6 text-[#333333]">First name</p>
                            <input ref={inputFName} type="name" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/> */}

                            {/* <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Email Address</p>
                            <input ref={inputEmail} type="email" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/> */}

                            {/* <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Company</p>
                            <input ref={inputCompany} type="text" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/> */}

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">City</p>
                            <input ref={inputCity} type="text" className="w-[166px] md:w-[324px] border border-[#E0E0E0] p-1 text-[#333333] font-Helvetica text-[16px] leading-6 font-normal" placeholder="Choose City"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Address 1</p>
                            <input ref={inputAddress1} type="text" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Address 2</p>
                            <input ref={inputAddress2} type="name" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>
                        </div>
                        <div className="mt-[36px]">
                             {/* <p className="mt-[52px] font-normal text-[16px] leading-6 text-[#333333]">Last name</p>
                            <input ref={inputLName} type="name" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/> */}

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Phone Number</p>
                            <input ref={inputPhone} type="number" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Country</p>
                            <input ref={inputCountry} type="name" className="w-[166px] md:w-[324px] p-1 border border-[#E0E0E0] text-[#333333] font-Helvetica text-[16px] leading-6 font-normal"/>

                            <p className="mt-4 font-normal text-[16px] leading-6 text-[#333333]">Zip Code</p>
                            <input ref={inputZipcode} type="number" className="w-[166px] md:w-[324px] border border-[#E0E0E0]"/>

                           

                            
                        </div>
                        <div className="col-span-1 lg:col-span-2">
                            
                            <h1 className="text-[20px] leading-7 font-Helvetica font-bold text-[#333333]">Billing Address</h1>
                            <div className="flex">
                                <div className="w-5 h-5 border border-[#BDBDBD]"></div>
                                <p className="ml-1 font-Helvetica font-normal text-[14px] leading-[22px] text-[#4F4F4F]">Same as shipping address</p>
                            </div>
                            <div className="mt-6 flex flex-col lg:flex-row gap-6">
                                <button  className="w-[166px] md:w-[324px] h-[56px] flex items-center  border border-[#E0E0E0] font-Helvetica font-normal text-[16px] leading-6 text-[#4F4F4F] justify-around"><MdKeyboardArrowLeft /> Back to cart</button>
                                <button onClick={() => setShipstate('block')} className="w-[166px] md:w-[324px] h-[56px] flex items-center  border border-[#E0E0E0] font-Helvetica font-normal text-[16px] leading-6 text-white bg-[#FF9F0D] justify-around">Proceed to shipping <MdKeyboardArrowRight /></button>
                            </div>
                        </div>

                    </div>
                    <div className={`w-[224px] md:w-[424px] border border-[#E0E0E0] px-6 pb-6 ${shipstate} `}>
                       {newcart.map((item: Product)=>{
                        return <Check key={item._id} image={item.imageUrl} title={item.name} price={item.price}/>
                       })}
                        

                        <div className="mt-6 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Sub-total</p>
                            <p className="">{subtotal}$</p>
                        </div>
                        <div className="mt-4 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Shipping</p>
                            <p className="">Free</p>
                        </div>
                        <div className="mt-4 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Discount</p>
                            <p className="">25%</p>
                        </div>
                        <div className="mt-4 flex justify-between font-Helvetica font-normal text-[16px] text-[#4F4F4F] leading-6">
                            <p className="">Tax</p>
                            <p className="">54.76$</p>
                        </div>
                        <hr className="border border-[#E0E0E0] mt-4"/>
                        <div className="mt-4 flex justify-between font-Helvetica text-[18px] text-[#333333] leading-[26px]">
                            <p className="font-normal">Total</p>
                            <p className="font-bold">{subtotal}</p>
                        </div>
                        <button onClick={placeOrder} className="mt-4 rounded-md bg-[#FF9F0D] text-white h-[58px] w-[188px] md:w-[376px] flex items-center justify-center">Place an Order <FaArrowRightLong /></button>

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