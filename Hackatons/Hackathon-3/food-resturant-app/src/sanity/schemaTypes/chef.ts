

export default{
    name:"chef",
    title:"Chef",
    type: "document",
    fields:[
            {name: "name", type:"string", title:"Chef Name"},
            {name: "position", type:"string", title:"Position"},
            {name: "experience", type:"number", title:"Experience"},
            {name: "specialty", type:"string", title:"Speciality"},
            {name: "description", type:"string", title:"Description"},
            {name: "available", type:"boolean", title:"Availablity"},
            {name: 'image', type: 'image',options: {hotspot: true}},
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

    ]
}