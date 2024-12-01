// let cart = [
//     {
//         price: 200,
//         qty: 3
//     },
//     {
//         price: 300,
//         qty: 3
//     },
//     {
//         price: 300,
//         qty: 3
//     }
// ]

// const total = cart.slice(0,2).reduce((acc , curr)=>acc+curr.price*curr.qty,0)
// console.log(total);
// let subTotal = cart.slice(0,2)
// console.log(subTotal);

// let course = [
//     {
//         class: "mern",
//         completeStatus: true
//     },
//     {
//         class: "python",
//         completeStatus: false
//     },
//     {
//         class: "ui/ux",
//         completeStatus: true
//     },
//     {
//         class: "php",
//         completeStatus: false
//     },
// ]
// let completed=[]
// let inComplete=[]

// for (let i = 0; i < course.length; i++) {
//     const element = course[i];
//     if (element.completeStatus) {
//         completed.push(element)
//     } else {
//         inComplete.push(element)
//     } 
// }

// console.log(completed);
// console.log(inComplete);

// let number = [1,2,3,4,5,6,7];
// const filteredNumber = number.filter(function (num){
//     return num>4
// }) 
// console.log(filteredNumber);
// const foundNumber = number.find(function (num){
//     return num>4
// }) 
// console.log(foundNumber);

let countries =[
    {
        name :"Nepal",
        code:"Np"
    },
    {
        name :"India",
        code:"Id"
    },
    {
        name :"Australia",
        code:"Au"
    },
    {
        name :"Japan",
        code:"Jp"
    },
]
findCountry=(name)=>{
    let country = countries.find(e => e.name === name)
    return country ? country.code : "country not match"
}
let x = findCountry("Japan")
console.log(x);

// function getCountryCode(name) {
//     const country = countries.find(e => e.name.toLowerCase() === )
// }

let sentence = "He is a good boy"
let wordSeperator = sentence.split(" ")
console.log(wordSeperator);
console.log(wordSeperator.length);

let num = [1,2,3,4]
let newNum = num.push(5)
console.log(num);

let removeNum = num.pop()
console.log(num);

//shift unshift includes
let num1 = [1,2,3]
let num2 = [...num1,5,6,7,8]

console.log(num2);

// parse && stringify
const jasonString = '{"name" : "alisha" , "age":20}' 
const jasonObject = JSON.parse(jasonString)
const name1 = jasonString.name
console.log(jasonObject.name);

const jasonObject1 = {"name":"alisha" , "age":20}
const jsonString1 = JSON.stringify('jasonObject1')
console.log(jsonString1);

let numbers = [1,2,3,4]
let double = numbers.map((num)=>{
    return num*2
})
console.log(double);


