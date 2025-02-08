export default {
    name: "product",
    type: "document",
    fields:[
        {name: "product-name", type:"string", title:"Product Name"},
        {name: "price", type:"string", title:"price"},
        {name: "product_ID", type:"string", title:"product_id"},
        {name: "product-details", type:"string", title:"Product Details"},
        {name: 'image', type: 'image',options: {hotspot: true}},
        {name: "reviews", type:"number", title:"Reviews"},

    ]
}
