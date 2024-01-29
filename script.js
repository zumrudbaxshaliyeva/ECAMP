
/*---------------------Task1------------------- */
//Part2
let arr=[1,2,3,4,5,6]
let sum=0
function calcSum(){


    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}

console.log(calcSum());

//Part3

let counter=0
while (counter<5) {
    counter++;
    console.log(counter);
}
//Part4


let countDown=5;
do {
    countDown--;
    console.log(countDown);
} while (countDown>0);

//Part5
function evaluateGrade(grade){
    if (grade>60) {
        console.log("Pass");
    
    } else {
        console.log("Fail");
    }
    }
    console.log(evaluateGrade(50));