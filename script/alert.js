// let value =confirm("Are you sure ?");
// console.log("clicked",value);
// if (value) {
//     console.log("Accepted");
// }
// else{
//     console.log("Rejected");
// }

const authorizedUser = ["Alice","Bob","Charle"]
const checkUser = ()=>{
    const enterName = prompt("Enter Your Name :")
    return authorizedUser.includes(enterName) ? alert(`${enterName} is Authorized`) : alert(`${enterName} is Not Authorized`);
}
checkUser();