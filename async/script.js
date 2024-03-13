
// //task1

// function createDelay(milliseconds) {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("Delay completed");
//       }, milliseconds);
//   });
// }
// //task2
// const delayPromise = createDelay(1000);

// delayPromise.then((message) => {
//   console.log(message);
// }).catch((error) => {
//   console.log(error);
// });

// //task3
// function createDelayModify(milliseconds, message) { 
//   return new Promise((resolve) => { //bu setr bize promise qaytarir ve resolve qebul edir
//       setTimeout(() => {
//    resolve(message)//consolde gostermek istediyimiz mesaj
//       }, milliseconds); //delay time 
//   })
// }
// createDelayModify("First delay time",500) //funksiyani cagiririq ve parametrləri göndəririk
// .then((message)=>{
//   console.log(message)
//   return createDelayModify("Second delay message:",1000) //Bu hissede bir neçə messajimiz və vaxtimiz  oldugu ücün chainin promise baş verir 
// })
// .then((message)=>{
//   console.log(message)
//   return createDelayModify("Second delay message:",1500)
// })
// .then((message)=>{
//   console.log(message);
// })
// .catch((error)=>{
//   console.error(error) //əgər then bloklarinda xəta olarsa catch bloku yəni error mesajı görürük.

// })









// -----------------------------------------------13.03.2024------------------------------------
async function createDelay(message,delay){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve(message)
},delay)
})
}
async function delayProcess(){
  try{
    const result= await createDelay("Delay completed",1000)
    console.log(result);
  }
  catch(error){
    console.error("Xeta var",error);
  }
}
delayProcess()
async function delayProcessChained(){
  try{
    const result2=await createDelay("First delay",500)
    console.log(result2);
    const result3=await createDelay("Second delay",1000)
    console.log(result3);
    const result4=await createDelay("third delay",1500)
    console.log(result4);
  }
  catch(error){
    console.error("Xeta var",error)
  }
}
(async () => {
  await delayProcess();
  await delayProcessChained();
})();