import { title } from "process";

export default{
    name:"customers",
    title:"Customers",
    type:"document",
    fields:[
        {name:"customer_name", title:"Customer Name", type:"string"},
        {name:"email", title:"Email", type:"email"},
        {name:"phone", title:"Contact Number", type:"number"},
        
    ]
}