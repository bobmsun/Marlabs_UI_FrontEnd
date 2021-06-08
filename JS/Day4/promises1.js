// Ajax
// Ajax is made possible by the brower object
// Ajax: A is Asynchronize
// Ajax: partial update, refresh only portion of the page; update part of the page quitely; Ajax lets us seed Asyn request to the server
// we do Ajax through the browser object XMLHTTPrequest


// Where are we going to use Promises?
// Promise can be used with AJAX, see promise.html

// Why promised are created?
// 其中一个 reason： to avoid callback hell

// This function will create a promise and return me a promise
function doubleAfter2Secods(x){
    return new Promise(resolve =>{           // here we are specifying the reject, only specify the resolve
        setTimeout(()=>{
            resolve(x * 2) 
        }, 2000)
    })
}


doubleAfter2Secods(10).then(r => {
    console.log(r)
})


let sum = doubleAfter2Secods(10).then(r => {return r}) + doubleAfter2Secods(20).then(r => {return r}) 
+ doubleAfter2Secods(30).then(r => {return r})

console.log(sum)    // cannot get a value out of it




// Promise.all
// js callback hell

function addPromise(){
    return new Promise(resolve => {
        doubleAfter2Secods(10).then(a => {
            doubleAfter2Secods(20).then(b => {
                doubleAfter2Secods(30).then(c => {
                    resolve(a+b+c)
                })
            })
        })
    })
}

addPromise().then(r => console.log(r))




//async await

// async function addAsync(){
//     const a = await doubleAfter2Secods(10)
//     const b = await doubleAfter2Secods(20)
//     const c = await doubleAfter2Secods(30)
//     return a+b+c
// }

// addAsync().then(sum=>{
//     console.log(sum)
// })

// // function test()
// // {
// //     const a =  doubleAfter2Secods(10)
// //     const b =  doubleAfter2Secods(20)
// //     const c =  doubleAfter2Secods(30)
// // }

// // test()


// //return a promise
// async function dummy(){
//     return 22
// }

// console.log(dummy())


