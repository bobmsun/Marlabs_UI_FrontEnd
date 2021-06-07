// We promised sth we don't have. 之后, we either fulfill the promise or reject the promise.
// 我们promise 一个值，之后有了这个值之后 就返回这个值，这就 resovled 了，否则如果for some reason 我们没得到这个值，就叫 reject 了 
// Promise: we promise a value we don't have right now 


//Promise  3.1443894797492
//resolved(3.1443894797492)
//rejected(error)


// How to create a promise object?
// 用 constructor function
// let promise = new Promise(function(resolve, reject){
//     ///
// })

// promise 有3个state
// 1. new Promise()      // state: pending
// 2. resolved           // state: fullfilled
// 3. rejected           //state: rejected



// By the time the promise returns, we can access the value using the .then method

// Promise dummy 例子1 (means nonpractical code)
// 以下这个例子 hard code 了 succuess
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("done"), 1000)
})

promise.then(
    (result)=>console.log(result),
    (error)=>console.log(error.message)
)

// console.log(promise)
// setTimeout(() => console.log(promise), 3000)






// Promise dummy 例子2
// 以下这个例子 hard code 了 reject
let promise2 = new Promise(function(resolve, reject){
    reject(new Error("Rejected"));
})

promise2.then(
    (result)=>console.log(result),
    // (error)=>console.log(error)
    (error)=>console.log(error.message)
)

// 对于以上，this is one way of writing error handler




// Promise dummy 例子3
// catch 例子
let promise3 = new Promise(function(resolve, reject){
    reject(new Error("Rejected"));
})


promise3
.then(
    (result)=>console.log(result),
    // (error)=>console.log(error)
    // (error)=>console.log(error.message)
)
.catch(
    (error) => console.log(error.message)
)
.finally(
    console.log("Always run")
)


// Promises are async
// Whenever we have a async code, the finally block will run first.




// let v;
// let promise = new Promise(function(resolve, reject){
//     // setTimeout(()=>resolve("done"), 0)
//     // reject(new Error("Rejected"))
//     v = 22;
//     resolve("done")
// })


// // By the time the promise returns, we can access the value using the .then method

// promise
// .then(
//     (result)=>console.log(result),
//     // (error)=>console.log(error.message)
// )
// .catch(
//     (error)=>console.log(error.message)
// )
// .finally(
//     () => {v=null;console.log("Always Runs")}  
// )

//////////////////////////////////////////////////////////
