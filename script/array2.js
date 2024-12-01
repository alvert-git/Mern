let students = [
    {name:"ramesh",hasPaidStatus: false,hasScholarship:true},
    {name:"ram",hasPaidStatus: true,hasScholarship:true},
    {name:"jhon",hasPaidStatus: false,hasScholarship:false}
]

students.forEach(student=>{
   if (student.hasPaidStatus && student.hasScholarship) {
    console.log(`${student.name} can give exam`);
   } else{
    console.log(`${student.name} cannot give exam`);
    
   }
})

let cardItems=[
    {name:"rohan",
        products:[
            {title:"laptop",price:20},
            {title:"Mobile",price:10},
            {title:"tab",price:15},
        ]
    },
    {name:"ronisha",
        products:[
            {title:"Clothes",price:20},
            {title:"Bag",price:10},
            {title:"Shoe",price:15},
        ]
    }
]
cardItems.map((prod)=>{
    let total = prod.products.reduce((sum,product)=>sum+product.price,0)

    console.log(`total price ${prod.name}`,total);
    
})

let five = 5;
console.log(typeof(five));

let fruits = [
    {
        name:"orange",
        scientificName:"xyz",
        prices: [
            {
                country: "Nepal",
                price:20
            },
            {
                country: "India",
                price:30
            },
            {
                country :"Australia",
                price:2
            },
            {
                country :"USA",
                price:1
            },
        ]
    }
    
]


fruits.map((fruit)=>{
    fruit.prices.map((e)=>{
        console.log(`The Price of ${fruit.name} in ${e.country} is ${e.price}`);
    })
})
