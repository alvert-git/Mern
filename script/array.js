let numbers = [1,2,3,4,5]
console.log(numbers);
let num = [1,2,3,4,"five"]
console.log(num);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let realNumber=[1,2,3,4,5,6,7,8,9,10]

let evenNumber = []
let oddNumber = []

realNumber.map((number)=>{
    if(number % 2 == 0){
        evenNumber.push(number);
    }
    else{
        oddNumber.push(number);
    }
})
console.log(evenNumber);

const age = 15
let canVote = (age>=18? "can vote":"cannot vote");
console.log(canVote);
