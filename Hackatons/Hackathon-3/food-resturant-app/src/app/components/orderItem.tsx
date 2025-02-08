import OrderList from "./orderlist";
interface OrderItemProps {
    product_total: number;
    orderDate: string;
    status: string;

}

const OrderItem = (Order:OrderItemProps) => {
    const {product_total, orderDate, status} = Order;
    return (
        <div className="flex flex-col gap-y-4">
            {/* <OrderList /> */}
            <div className="flex gap-x-8 flex-wrap">
                <div className="font-normal font-Helvetica text-[16px]">Total: ${product_total}</div>
                <div className="font-normal font-Helvetica text-[16px]">23-04-25{orderDate}</div>
                <div className="font-normal font-Helvetica text-[16px]">status : {status}</div>
            </div>

            <hr />
            
            
        </div>
    )
}
export default OrderItem;