//Promise  3.1443894797492

//resolved(3.1443894797492)

//rejected(error)

// //ctr function
// let promise = new Promise(function(resolve, reject){
//     ///
// })


// 1. new Promise() // state:pending
// 2. resolved // state:fullfilled
// 3. rejected //state:


//dummy 
//Promises are async
let v;
let promise = new Promise(function(resolve, reject){
    // setTimeout(()=>resolve("done"), 0)
    // reject(new Error("Rejected"))
    v = 22;
    resolve("done")
})

promise
.then(
    (result)=>console.log(result),
    // (error)=>console.log(error.message)
)
.catch(
    (error)=>console.log(error.message)
)
.finally(
    () => {v=null;console.log("Always Runs")}  
)

//////////////////////////////////////////////////////////


