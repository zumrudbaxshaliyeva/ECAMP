// fetch('https://jsonplaceholder.typicode.com/posts/1"')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.error("Xeta:",error))

// fetch('https://restcountries.com/v3.1/all')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.error('Xeta:',error))

// function getStudents(url){
//     fetch(url)
//     .then(response=>response.json())
//     .then(students=>console.log(students))
//     .catch(error=>console.error("xeta bas verdi",error))
// }
// getStudents("students.json")

// fetch("https://reqres.in/api/users")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>console.error("xeta bas verdi",err))

// async function getStudents(url){
//     try{
// const response=await fetch(url)
// const data=await response.json()
// console.log(data);
//     }
//     catch{(error=>console.error("xeta bas verdi",error))}
// }
// getStudents("students.json")

async function getCountries(url){
    try{
        const response=await fetch(url)
        const data=await response.json()
        console.log(data);
    }
    catch(error){
        console.error("xeta bas verdi",error)
    }

}
getCountries("https://restcountries.com/v3.1/all")