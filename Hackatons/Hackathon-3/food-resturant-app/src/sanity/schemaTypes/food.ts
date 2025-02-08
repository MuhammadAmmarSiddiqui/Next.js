

export default {
    name: "food",
    type: "document",
    title:"Food",
    fields:[
        {name: "name", type:"string", title:"Food Name"},
        {name: "category", type:"string", title:"Category"},
        {name: "price", type:"number", title:"Discount Price"},
        {name: "originalPrice", type:"number", title:"Original Price"},
        {name: "description", type:"string", title:"Product Details"},
        {name: 'image', type: 'image',options: {hotspot: true}},
        {name: 'available', type: 'boolean',title:"Availability"},
        {name: "reviews", type:"number", title:"Reviews"},
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input: string) => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },
        {name:"tags", type:"array", title:"tags", of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Sell', value: 'sell'},
            {title: 'Crispy', value: 'crispy'},
            {title: 'Healthy', value: 'healthy'},
            {title: 'Popular', value: 'popular'}
          ]
        }}

    ]
}