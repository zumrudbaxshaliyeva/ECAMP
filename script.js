/*-------------------------Task1---------------------*/

// const obj1={
//     name:"Zumrud",
//     surname:"Bakhshaliyeva",
//     age:22,
//     profession:"computer engineer",
// }

// delete obj1.surname
// console.log(obj1)
// const {age:number}=obj1
// console.log(number)

// const obj2={
// hobby:"reading book",
// fav_music:"God is Woman",
// number:26
// }
//  const {hobby,...rest}=obj2
// console.log("Rest",rest)
// const arr=[
//     obj1,
//     obj2
// ]
// console.log(arr)
// const arr2=[{
//     ...obj1,
//     ...obj2
// }
// ]
// console.log(arr2)

/*-------------------------Task2-(PART1)---------------------*/
// const studentProfile={
//     name:"Leman",
//     age:16,
//     course:"PHP",
//     hobbies:["reading the book","play the piano"]
// }

// delete studentProfile.course
// console.log(studentProfile)

/*-------------------------Task2-(PART2)---------------------*/

// const studentProfile={
//     name:"Leman",
//     age:16,
//     course:"PHP",
//     hobbies:["reading the book","play the piano"]
// }

// delete studentProfile.age
//  const {name:studentName,...rest}=studentProfile
// console.log(studentProfile)

/*-------------------------Task2-(PART3)---------------------*/

// const grades=[85,92,78,85]
// console.log(grades[0],grades[1])

/*-------------------------Task2-(PART3)---------------------*/

// const additionalInfo={
//     address:"Dilara Aliyeva street",
//     phoneNumber:"+994506123749",
// }
// const studentProfile={
//     name:"Leman",
//     age:16,
//     course:"PHP",
//     hobbies:["reading the book","play the piano"]
// }
// const completeProfile={
//     ...additionalInfo,
//     ...studentProfile
// }
// console.log(completeProfile)

/*_____________________________________________________LERVEL2______________________________________________________________*/

// const  employeeDetails={
//     fullName:"Zumrud Bakhshaliyeva",
//     position:"Director",
//   yearsOfExperience:"10",
//   skills:["responsive design","Fast reading bugs"],
//   contact:{
//     email:"zumrudbakhshaliyeva",
//     phone:"+994506123749"
//   }
  
// }

// delete employeeDetails.contact["email"]
// employeeDetails.department="It"
// console.log(employeeDetails)


/*------------------------PART2--------------*/

// const  employeeDetails={
//     fullName:"Zumrud Bakhshaliyeva",
//     position:"Director",
//   yearsOfExperience:"10",
//   skills:["responsive design","Fast reading bugs"],
//   contact:{
//     email:"zumrudbakhshaliyeva",
//     phone:"+994506123749"
//   }
  
// }
// const {fullName:employeeName,...rest}=employeeDetails
// console.log(employeeName)
// console.log(employeeDetails);

/*------------------------PART3--------------*/
// const projectScores=[
//     {
//         projectId:22,
//         score:100
//     },
//     {
//         projectId:22,
//         score:100

//     },
//     {
//         projectId:22,
//         score:100

//     },
//     {
//         projectId:22,
//         score:100

//     }
// ]
// console.log(projectScores[0]);

/*------------------------PART3--------------*/

const employeeDetails={
    fullName:"Zumrud Bakhshaliyeva",
    position:"Director",
  yearsOfExperience:"10",
  skills:["responsive design","Fast reading bugs"],
  contact:{
    email:"zumrudbakhshaliyeva",
    phone:"+994506123749"
  }
}

const personalInfo={
    homeAddress:"Baku city",
    emergencyContact:"+994506123749",
    maritalStatus:"single"
}

const completeEmployeeProfile=[{
    ...employeeDetails,
   ...personalInfo
}
]
console.log(completeEmployeeProfile);
