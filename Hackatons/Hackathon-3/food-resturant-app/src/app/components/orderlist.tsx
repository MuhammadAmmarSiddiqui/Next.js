interface OrderListProps {
    productName: string;
    productPrice: number;
}
const OrderList = (list:OrderListProps) => {
    const {productName, productPrice} = list;
    return(
        <div className="flex gap-2">
             <div className="font-Helvetica font-bold text-[16px] ">{productName}</div>
             <div className="font-normal font-Helvetica text-[16px]">${productPrice}</div>
        </div>
    )
}
export default OrderList;