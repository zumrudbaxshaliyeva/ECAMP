
/* ---------------------------TASK1------------------ */
//Part1
const color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Caution");
        break;
    default:
        console.log("Unknown color");
        break;
}


//Part2

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < matrix.length; i++) {
    for (let g = 0; g < matrix[i].length; g++) {
        console.log(matrix[i][g])

    }

}

//Part3
const product = {
    name: "butter",
    price: 100,
    inStock: true
}

for (const key in product) {
    console.log(`${key}:${product[key]}`);
}
//Part4

if (product.price < 50) {
    product.inStock = true
}
else {
    product.inStock = false
}
console.log(product.inStock);

/* ---------------------------TASK2------------------ */
//Part1

const dayOfWeek = prompt("Enter a dayOfWeek").toLowerCase();

switch (dayOfWeek) {
    case "monday":
        console.log("Monday-Study JavaScript");
        break;
    case "tuesday":
        console.log("Tuesday-To do sport");
        break;
    case "wensday":
        console.log("Wensday-go to library");
        break;
    case "thursday":
        console.log("Thursday-Swimming day");
        break;
    case "friday":
        console.log("Friday-dance day");
        break;
    default:
        console.log("resting day")
        break;
}

//Part2

const numbers=[1,2,3,4,5]
let sum=0
for(let i=0;i<numbers.length;i++){
sum+=numbers[i]

}
console.log(sum);

//Part3

const fruits=["banana","apple","cherry"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i],fruits[i].length)
}
//Part4
const students={
    name:"zumrud",
    grade:100

}

if (students.grade>60) {
    console.log("Pass");
}
else{
    console.log("Fail");
}

