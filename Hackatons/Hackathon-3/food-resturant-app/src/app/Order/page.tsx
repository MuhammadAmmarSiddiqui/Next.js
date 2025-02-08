'use client'
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from '@/sanity/lib/client'
import OrderItem from "../components/orderItem";
import OrderList from "../components/orderlist";

export default function Order(){
    const { user, isLoaded } = useUser();
    const [state, setState] = useState('bg-yellow-200 text-yellow-400');
    const [history, setHistory] = useState('bg-yellow-200/20 text-yellow-400/40');
    const [order, setOrder] = useState<{ _id: string, products: { _id: string, name: string, price: number }[], product_total: number, dateTime: string, status: string }[]>([]);
    // const [activeOrder, setActiveOrder] = useState([]);
    //console.log(user);
    if (!isLoaded) return <p>Loading...</p>; // Prevent errors while loading
    if (!user) return <p>No user found.</p>;

    
    const ActiveOrder = async () => {
        setState('bg-yellow-200 text-yellow-400');
        setHistory('bg-yellow-200/20 text-yellow-400/40');
        const activeData = await client.fetch(`*[_type == "order" && customer._ref == *[_type == "customer" && email == "${user.primaryEmailAddress?.emailAddress}" ][0]._id && status == "pending"]{
            _id, products, product_total, dateTime, status}`);
            console.log(activeData);
            setOrder(activeData);

            
    }
    const OrderHistory = async () => {
        setState('bg-yellow-200/20 text-yellow-400/40');
        setHistory('bg-yellow-200 text-yellow-400');
        const HistoryData = await client.fetch(`*[_type == 'order' && status == 'shipped' && customer._ref == '${user.id}']{
            _id, products, product_total, dateTime, status}`);
            setOrder(HistoryData);
    }
useEffect(() => {
    ActiveOrder();
}, [])

    return(
        <div>
            <Navbar />
            <Hero heading="Order Page" data="Order"/>
            <div className="flex justify-around text-lg md:text-2xl mt-4">
                <button onClick={ActiveOrder} className={`${state} shadow-lg p-2 rounded-sm`}>Active Order</button>
                <button onClick={OrderHistory} className={`${history} shadow-lg p-2 rounded-sm`}>Order History</button>
            </div>

            <div className="grid place-content-center mt-12">
                {order.map((e) => (
                    <div key={e._id} className="grid grid-flow-row-dense gap-4">
                        {e.products.map((item: any) => (
                            <OrderList key={item._id} productName={item.product_name} productPrice={item.product_price} />
                        ))}
                        <OrderItem key={e._id} product_total={e.product_total} orderDate={e.dateTime} status={e.status}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}