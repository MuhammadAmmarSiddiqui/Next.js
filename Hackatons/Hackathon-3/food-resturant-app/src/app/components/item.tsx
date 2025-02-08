import Image, { StaticImageData } from "next/image";

import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { json } from "stream/consumers";

interface CardProps{
    image: string,
    name: string,
    price: number,
    total: number,
    quantity: number,
    // product:string,
    handlePlused: () => void,
    handleMinus: () => void,
    deleteFromCart: (product: string) => void
}
// interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     imageUrl: string;
//     handlePlused: (name:string) => any;
    
//   }

const Item =(props:CardProps) => {
    const {image, name, price, total, quantity, handlePlused, handleMinus, deleteFromCart} = props
    // const handleMinus = (name:string)=>{
        // const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        // if (cart[name]) {
        //     cart[name] = {
        //         ...cart[name],
        //         quantity: (cart[name].quantity || 0) - 1,
        //     };
        // }

        // localStorage.setItem('cart', JSON.stringify(cart));
    // };
    // const handlePlus = (name: string) => {
    //     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    //     if (cart[name]) {
    //         cart[name] = {
    //             ...cart[name],
    //             quantity: (cart[name].quantity || 0) + 1,
    //         };
    //     } else {
    //         cart[name] = {quantity: 1 };
    //     }

    //     localStorage.setItem('cart', JSON.stringify(cart));
    // };
    // const del = (product:any\) => {
    //     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    //     const updatedcart = cart.filter((product[name]=>product))
    // };
    // const deleteFromCart = (itemName: string) => {
    //             try {
    //       // Step 1: Retrieve and parse the cart data
    //       const cart = JSON.parse(localStorage.getItem('cart') || '{}');
      
    //       // Step 2: Check if the item exists
    //       if (cart[itemName]) {
    //         // Step 3: Delete the item
    //         delete cart[itemName];
      
    //         // Step 4: Save the updated cart back to localStorage
    //         localStorage.setItem('cart', JSON.stringify(cart));
      
    //         console.log(`Item "${itemName}" removed successfully.`);
    //       } else {
    //         console.warn(`Item "${itemName}" does not exist in the cart.`);
    //       }
    //     } catch (error) {
    //       console.error('Error deleting item from cart:', error);
    //     }
    //   };
      
      // Example Usage
      
    return(
        <div className="mt-8">
            <div className="grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 place-content-center">
                <div className="flex gap-4">
                    <Image src={image} alt='burger_image' width={93.14} height={97.13} className="w-[93.14px] h-[97.13px]"/>
                    <div>
                        <p>{name}</p>
                        <div className="flex gap-1 mt-2">
                            <FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#FF9F0D]"/><FaStar className="text-[#E0E0E0]"/><FaStar className="text-[#E0E0E0]"/>
                        </div>
                    </div>
                    
                </div>
                <div className="place-self-center">
                    <p className="font-Helvetica font-normal text-[16px] leading-6 text-[#333333] text-center">{price}</p>
                </div>
                
                <div className="rounded-[18px] h-8 border border-[#E0E0E0] flex justify-around place-items-center">
                    <p onClick={()=> handleMinus()}>-</p>
                    <p>{quantity}</p>
                    <p onClick={()=> handlePlused()}>+</p>

                </div>
                <div className="place-self-center">
                    <p className="font-bold text-[16px] leading-6 text-[#333333] text-center">{total}</p>
                </div>
                <div className="place-self-center">
                    <RxCross2 onClick={()=> deleteFromCart(name)}  className="text-[20px]"/>
                </div>

                
            </div>
            <hr className="mt-[18px]"/>
        </div>
    )
}
export default Item;