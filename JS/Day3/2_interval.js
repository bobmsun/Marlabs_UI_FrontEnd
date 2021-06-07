// 学习 setTimeout & clearTimeout

// 执行这行：3s 后 打印 “Time Out”
setTimeout(
     ()=>console.log('Timed Out'), 3000
)           

// 那如果，在3s 到来之前，想 cancel 这个指令，不打印，怎么做？
var setRef;
setRef = setTimeout(
     ()=>console.log('Timed Out'), 3000
)
clearTimeout(setRef)   // 可以发现，上面的 “Time Out” 并没有打印




// 学习 setInterval & clearInterval

var setRef;
setRef = setInterval(
    ()=>console.log(new Date().getSeconds()), 1000
)

clearInterval(setRef)        // 如果没有这行，就会每个 1s 执行一下 console.log(new Date().getSeconds())
// 所以，setInterval 之后一定要 clearInterval，否则就会一直执行下去




// Date 还有很多 function 可以让我们 拿到时间信息
console.log(new Date().getMinutes())

console.log(new Date())




// 思考题：实现一个 Timer
// 答案见 3_timer.html