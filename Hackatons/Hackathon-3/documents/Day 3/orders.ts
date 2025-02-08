export default{
    name:"orders",
    type:"document",
    title:"Orders",
    fields:[
        {name:"customer-id", type:"reference", to:[{type:"customer"}]},
        {name:"product-name", type:"string", title:"Product Name"},
        {name: "product_ID", type:"string", title:"product_id"},
        {name: "price", type:"string", title:"price"},
        {name: "product-details", type:"string", title:"Product Details"},
        {name: 'poster', type: 'image',options: {hotspot: true}},
        {name: "quantity", type:"number", title:"Quantity"},
        // {name:"seller-name",type:"string"},
        // {name:"seller-id", type:"reference", to:[{type:"seller"}]},
        {name:"status", type:"string", title:"Status"},
        {name:"order-id", type:"string", title:"Order ID"},

    ]
}