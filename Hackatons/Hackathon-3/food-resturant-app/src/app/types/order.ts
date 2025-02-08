export default interface Order {
    _type:string;
    dateTime: string;
    status: string;
    customer:{_type:string; _ref:string;};
    phone:number;
    country:string;
    city:string;
    address1:string;
    address2:string;
    zipcode:string;
    product_total:number;
    // dateTime:string;
    products: {
        product_id: string;
        product_name: string;
        product_price: number;
        product_quantity: number;
        
    }[];


}