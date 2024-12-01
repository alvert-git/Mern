// console.log("hello form top");

// function abcd(name) {
//     return(`hello, ${name} !`);
// }
// const x =abcd("rame")
// console.log(x);

// function add(x,y) {
//     return x+y
// }
// const k = add(2,3)
// console.log(k);

// function mul(a,b) {
//     return a*b
// }
// const ans = mul(10,20)
// console.log(ans);

// setTimeout(()=>{
//     console.log("hello from middle");
    
// },2000);

// function sum(...numbers) {
//     let total = 0
//     for(let num of numbers){
//         total += num
//     }
//     return total
// }
// console.log(sum(1,2,3,4));

// console.log("form bottom");

// try {
//     let firstName = "Ronish"
//     let lastName = "Paudel"
//     let fullName = firstName+lastName
//     console.log("This is full name ", fullName1);
    
// } catch (err) {
//     console.log("This is a error",err.message);
    
// const add = (x,y)=>{
//     return x+y
// }
// let arrowTotal = add(2,9)
// console.log(arrowTotal);

// function normal(){
//     this.message = "Hello World"
//     setTimeout(() => {
//         console.log(this.message);
        
//     }, 2000);
// }
// normal()

// const showAlert = (type , message)=>{
//     console.log(`${type} : ${message}`);
    
// }
// showAlert("Warning", "you are not a user")



// fetchData=(callbacks)=> {
//     console.log("Api is listing");
//     setTimeout(() => {
//         callbacks("API Succesfully Fetched")
//     }, 3000);
    
// }

// fetchData((message)=> {
//     console.log(message);
// })


//promise takes resolve and reject as an argument

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Rejected")

        resolve({
            data : {
                name: "umesh",
                email:"umesh@123"
            }
        })

    },2000);
})

promise.then((res)=>{
    console.log("response",res);
})
.catch((err)=>{
    console.log("This is a error",err);
    
})
console.log(promise);

// let name1 = ["Shayam" , "Hari" ,"Sita" , "Gita" , "Ramesh" ]

// searchUser=(name)=>{
//     let isUser = name1.find(e => e === name )
//     console.log(isUser ? `${name} is Authorized` :  `${name} is Not Authorized`   );
// }

// searchUser("Hari")

// searchUser1=(name)=>{
//     let isUser = name1.includes(e => e === name )
//     console.log(isUser ? `${name} is Authorized` :  `${name} is Not Authorized`   );
// }
// searchUser1("Ram")

// const authorizedUser = ["Alice","Bob","Charle"]
// const checkUser = ()=>{
//     const enterName = prompt("Enter Your Name :")
//     return authorizedUser.includes(enterName) ? alert(`${enterName} is Authorized`) : alert(`${enterName} is Not Authorized`);
// }
// checkUser();
// asynchornous
// promise , callback