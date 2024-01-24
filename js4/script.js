
/*--------------------------------MY Task----------------------- */

const myProfile={
    name:"Zumrud",
    surname:"Bakhshaliyeva",
    age:22,
    student:true
}

// if(myProfile.age<=17){

//     myProfile.student=false;
// }
// else{
//     myProfile.student=true;
// }
// console.log(myProfile) //first option

myProfile.student=myProfile.student<=17 ?  myProfile.student=false :  myProfile.student=true;
console.log(myProfile) //second option

/* task2 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// if (!(arr.length > 9)) {
//     console.log("arrayin uzunluğu 9dan boyukdur");
// } else {
//     console.log("arrayin uzunluğu 9 dan kiçikdir");
// }


/* task3 */

let number = prompt("Enter a number");


number = parseFloat(number);

if (51 <= number && number < 61) {
    console.log("F");
} else if (61 <= number && number < 71) {
    console.log("D");
} else if (71 <= number && number < 81) {
    console.log("C");
} else if (81 <= number && number < 91) {
    console.log("B");
} else if (91 <= number && number <= 100) {
    console.log("A");
} else if (number > 100) {
    console.log("Bele qiymet mövcud deyil");
} else if (number < 51) {
    console.log("Failed to exam");
}
