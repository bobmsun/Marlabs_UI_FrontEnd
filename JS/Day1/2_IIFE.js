// 例 1:
(function add1(a,b){
   console.log("SUM: ", a+b)
})();         // 打印 NaN，因为 undefined + undefined 是 NaN


// 例 2:
(function add2(a,b){
   console.log("SUM: ", a+b)
})(10, 20);   



// 例 3:
let val = (function add(a,b){
   return  (a+b)                // 因为这里变成了 return，所以需要定义一个 variable 去 catch 这个 value
})(11,22);

console.log(val)
