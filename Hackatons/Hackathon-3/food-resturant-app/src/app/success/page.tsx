'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { Bounce, toast } from 'react-toastify';

export default function Success() {
    const router = useRouter();

    useEffect(() => {
        const processOrder = async () => {
            const pendingOrder = sessionStorage.getItem('pending order') || '{}';
            console.log(pendingOrder);

            if (pendingOrder) {
                try {
                    const orderData = JSON.parse(pendingOrder);
                    console.log(orderData);
                    const event = await client.create(orderData);
                    if(event){
                        localStorage.removeItem('cart');
                        localStorage.removeItem('subtot');
                        sessionStorage.removeItem('pendingOrder');
    
                        toast.success('Order placed successfully!', {
                            position: 'bottom-right',
                            autoClose: 5000,
                            theme: 'colored',
                            transition: Bounce,
                        });
    
                        // Redirect to order confirmation page or home
                        router.push('/Successed');
                    }
                    else(console.log('failed'))

                    // Clear cart after successful order creation

                } catch (error) {
                    console.error('Failed to create order:', error);
                    toast.error('Order failed. Please contact support.', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        theme: 'colored',
                        transition: Bounce,
                    });
                }
            }
        };

        processOrder();
    }, [router]);

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Processing your order...</h1>
        </div>
    );
}
