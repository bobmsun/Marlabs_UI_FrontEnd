// 函数参数

// 默认参数
function add1(a,b=44){
    console.log("SUM:"+(a+b))
}

add1(11)



// REST Params
// args is an array
function add2(a,b, ...args){
    let sum = 0;
    for (let a of args)
    {
        sum += a;
    }
    console.log(sum)
    console.log("a: ", a, "b: ",b)
    console.log(args instanceof Array)    // args 是一个 array
    console.log(args)
}

add2(1,2,3,4,5)
add2(1,2,3,5,6,7,1,1,1)




// JS 中的 ...
// ... 干的是什么？
// 摘自 MDN 官网
// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places 
// where zero or more arguments (for function calls) or elements (for array literals) are expected, 
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
arr = [12,1,3,4,15,23]
ar1 = [1,9,4,26,4]
console.log(Math.max(...arr, ...ar1))




// JS 中想 swap 两个 value：不需要 3rd param，in one line 即可 swap
x = 101
y = 909;
[x,y] = [y,x]
console.log('x: ', x,' ', 'y: ', y)