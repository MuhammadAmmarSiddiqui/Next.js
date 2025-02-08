export default{
    name:"customers",
    type:"document",
    fields:[
        {name:"customer-name", type:"string", title:"Customer Name"},
        {name:"email", type:"Email", title:"Email"},
        {name:"contact-number", type:"number", title:"Contact Number"},
        {name:"customer-id", type:"string"},
        
    ]
}