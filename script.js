/*--------------------------------------------Task1--------------------------------------*/

/*------------------------Part1-----------------*/
 const number=[10,20,30,40,50]

 const [firstElement,secondElement]=number
console.log(firstElement,secondElement);
console.log(number.length)

/*------------------------Part2-----------------*/

let myString="Zümrüd"
let myNumber=123456
let myBoollean=true

console.log(`myString - ${ typeof myString},myNumber - ${typeof myNumber},myBoollean - ${typeof myBoollean}`)

/*------------------------Part2-----------------*/

let firstNumber=6
let secondNumber=10

let sum=firstNumber+secondNumber
let multiply=firstNumber*secondNumber
let difference=firstNumber-secondNumber
let divide=firstNumber/secondNumber
console.log(`sum-${sum},multiply-${multiply},difference-${difference},divide-${divide}`)
console.log(`${firstNumber==secondNumber},${firstNumber===secondNumber},${firstNumber!=secondNumber},${firstNumber!==secondNumber},${firstNumber>secondNumber},${firstNumber<secondNumber},${firstNumber>=secondNumber},${firstNumber<=secondNumber}`);

/*------------------------Part2-----------------*/
let even=firstNumber>0
let positive=firstNumber%2==0


console.log(even&&positive)

console.log(even||positive)
console.log(!even)
/*--------------------------------------------Task1--------------------------------------*/
/*------------------------Part1-----------------*/
const scores=[100,90,80,70,60]
const [fisrtScore,secondScore]=scores
console.log(fisrtScore,secondScore);

const student={
    name:"Zumrud",
    age:22,
    isEnrolled:true
}

const {name:firstName,age:studentAge}=student
console.log(firstName,studentAge);
/*------------------------Part2-----------------*/
console.log(typeof scores)
console.log(scores.length)
    /*------------------------Part3-----------------*/
console.log(fisrtScore>secondScore)
console.log(fisrtScore<secondScore)
  /*------------------------Part3-----------------*/
  console.log(fisrtScore&&secondScore||student.age)
  
  console.log(student.isEnrolled!=true)