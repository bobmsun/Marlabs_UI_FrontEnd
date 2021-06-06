function doubleAfter2Secods(x){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(x*2)
        }, 2000)
    })
}

// doubleAfter2Secods(10).then(r => {
//     console.log(r)
// })

// let sum = doubleAfter2Secods(10).then(r=> r) + doubleAfter2Secods(20).then(r=> r) 
// + doubleAfter2Secods(30).then(r=> r)

// console.log(sum)




//Promise.all
//js callback hell

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

async function addAsync(){
    const a = await doubleAfter2Secods(10)
    const b = await doubleAfter2Secods(20)
    const c = await doubleAfter2Secods(30)
    return a+b+c
}

addAsync().then(sum=>{
    console.log(sum)
})

// function test()
// {
//     const a =  doubleAfter2Secods(10)
//     const b =  doubleAfter2Secods(20)
//     const c =  doubleAfter2Secods(30)
// }

// test()


//return a promise
async function dummy(){
    return 22
}

console.log(dummy())


