'use client'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Item from "../components/item";
// import burger from "../public/burger3.png";
// import lime from "../public/burgerLime.png";
// import donut from "../public/donut.png";
// import muffin from "../public/muffin.png";
import cheese from "../public/cheese.png";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import Footer from "../components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import Product from "../types/product";

export default function Cart(){

      const [newcart, setNewcart] = useState<Product[]>([]);
      
      
  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '{}');
      // Convert object to array
      if (cart && typeof cart === "object") {
        const cartArray = Object.entries(cart).map(([_id, details]: [string, any]) => ({
          _id: _id, // Use product name as id for now
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
  let subTotal = newcart.reduce((acc, e) => acc + e.quantity * e.price, 0);
  console.log(subTotal);
  localStorage.setItem('subtot', JSON.stringify(subTotal));
  console.log(localStorage.getItem('subtot'));
   
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Shopping Cart" data="Shopping cart"/>
            <div className="place-content-center px-1 pt-[120px]">
                <div className="hidden md:grid md:grid-cols-5">
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Product</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Price</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Quantity</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Total</div>
                    <div className="text-center font-bold text-[18px] leading-[26px] text-[#333333]">Remove</div>

                </div>
                {newcart.length == 0 ? (<p>List is empty</p>): (newcart.map((item: Product) => {
                    return <Item key={item._id}  image={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} total={item.price * item.quantity}
                    handlePlused={() => {
                        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
                        console.log(cart);
                        if (item.name) {
                            cart[item.name] = {
                                ...cart[item.name],
                                quantity: (cart[item.name].quantity || 0) + 1
                            };
                            setNewcart(newcart.map(cartItem => cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
                        } else {
                            cart[item.name] = { quantity: 1 };
                        }
                
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }} 
                    handleMinus={() => {
                        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
                        if (cart[item.name]) {
                            cart[item.name] = {
                                ...cart[item.name],
                                quantity: (cart[item.name].quantity || 0) - 1,
                            };
                            setNewcart(newcart.map(cartItem => cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
                        }
                
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }} 
                    deleteFromCart={()=>{
                        try {
                                  // Step 1: Retrieve and parse the cart data
                                  const cart = JSON.parse(localStorage.getItem('cart') || '{}');
                              
                                  // Step 2: Check if the item exists
                                  if (cart[item.name]) {
                                    // Step 3: Delete the item
                                    delete cart[item.name];

                              
                                    // Step 4: Save the updated cart back to localStorage
                                    localStorage.setItem('cart', JSON.stringify(cart));
                                    setNewcart(newcart.filter(cartItem => cartItem._id !== item._id));
                              
                                    console.log(`Item "${item.name}" removed successfully.`);
                                  } else {
                                    console.warn(`Item "${item.name}" does not exist in the cart.`);
                                  }
                                } catch (error) {
                                  console.error('Error deleting item from cart:', error);
                                 }
                    }}/>
                }))}
                {/* <Item image={burger} name="Burger" price="$35" total="$221"/>
                <Item image={lime} name="Fresh Lime" price="$25" total="$521"/>
                <Item image={donut} name="Pizza" price="$15" total="$421"/>
                <Item image={muffin} name="chocolate Muffin" price="425" total="$521"/>
                <Item image={cheese} name="Cheese Butter" price="$15" total="$325"/> */}

            </div>
            <div className="place-content-center my-[120px] flex flex-wrap justify-center lg:flex-nowrap gap-6 ">
                <div className="w-[324px] md:w-[648px]">
                    <h1 className="font-Helvetica font-bold text-[32px] leading-10 text-[#333333]">Coupon Code</h1>
                    <div className="mt-6 rounded-md border border-[#E0E0E0] p-5">
                        <p className="font-normal text-[18px] leading-[26px] text-[#828282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                        <div className="flex mt-6">
                            <input type="text" name="text" placeholder="Enter Here Code" className="w-[176px] md:w-[509px] h-[62px] rounded-l-[6px] border border-[#E0E0E0] text-[16px] text-[#828282] leading-6 pl-5" />
                            <Link href=''><button className="w-[83px] md:w-[89px] h-[62px] text-white rounded-[6px] text-[18px] leading-6 font-normal bg-[#FF9F0D]">Apply</button></Link>
                        </div>

                    </div>
                    
                </div>
                <div className="w-[324px] md:w-[648px]">
                    <h1 className="font-Helvetica font-bold text-[32px] leading-10 text-[#333333]">Total Bill</h1>
                    <div className="mt-6 rounded-md border border-[#E0E0E0] p-5">
                        <div className="flex justify-between">
                            <p className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Cart Subtotal</p>
                            <p className="font-bold text-[18px] leading-[26px] text-[#333333]">{subTotal}</p>
                        </div>
                        <div className="mt-[15px] flex justify-between">
                            <p className="font-normal text-[18px] leading-[26px] text-[#4F4F4F]">Shipping Charge</p>
                            <p className="font-normal text-[18px] leading-[26px]  text-[#4F4F4F]">$0.00</p>
                        </div>
                        <hr className="mt-6 border border-[#BDBDBD]"/>
                        <div className="mt-[15px] flex justify-between">
                            <p className="font-Helvetica font-bold text-[20px] leading-7 text-[#333333]">Shipping Charge</p>
                            <p className="font-bold text-[18px] leading-[26px] text-[#333333]">$0.00</p>
                        </div>

                    </div>

                    <Link href='/CheekOut'><button className="w-full h-16 bg-[#FF9F0D] text-white mt-6 font-normal text-[18px] leading-[26px] flex justify-center gap-2 items-center">
                        Proceed to Checkout 
                        <PiCheckSquareOffsetBold  className="text-[18px]"/>
                        </button></Link>

                </div>

            </div>
            <Footer />
            
        </div>
    )
}
