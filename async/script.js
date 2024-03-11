
//task1

function createDelay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delay completed");
        }, milliseconds);
    });
}
//task2
const delayPromise = createDelay(1000);

delayPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

//task3
function createDelayModify(milliseconds, message) { 
    return new Promise((resolve) => { //bu setr bize promise qaytarir ve resolve qebul edir
        setTimeout(() => {
     resolve(message)//consolde gostermek istediyimiz mesaj
        }, milliseconds); //delay time 
    })
}
createDelayModify("First delay time",500) //funksiyani cagiririq ve parametrləri göndəririk
.then((message)=>{
    console.log(message)
    return createDelayModify("Second delay message:",1000) //Bu hissede bir neçə messajimiz və vaxtimiz  oldugu ücün chainin promise baş verir 
})
.then((message)=>{
    console.log(message)
    return createDelayModify("Second delay message:",1500)
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error) //əgər then bloklarinda xəta olarsa catch bloku yəni error mesajı görürük.
})