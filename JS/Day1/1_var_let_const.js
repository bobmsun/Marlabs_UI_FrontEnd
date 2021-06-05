// 第一部分：介绍

// 整个 UI session 要学： es5 / es6 (JavaScript versions) + typescript, 然后是 AngularJS (Angular 9) + React
// 课上用的 environment：nodeJS + vs code
//                environment + IDE
// 共15 days，1.5hr / day



// 第二部分：

// 例 1: 
// SCOPING
// var , let , const 的区别

// var vs let 区别 1: 
// var - gloablly scoped variable; global within the scope
// let - block code variable

function fn(){
    var a = "LOL"
    let b = "Hi"

    console.log("inside function ", a, " ", b)


    {
       c = "horse"
       let d = "apple"
       var e = "peach"
       console.log("inside function and block ", a, " ", b)
       console.log("inside function and block ", c, " ", d)
    }

    console.log("inside function and outside block ", c)
    console.log("inside function and outside block ", e)
    // console.log(d)          // error: d is not defined
}
fn();

// Defining a variable without 'var' (例如 c) will make it truely global, can be accessed anywhere
console.log('Outside: '+c)

// console.log('Outside: '+a)            // error: a is not defined
// console.log('Outside: '+b)            // error: a is not defined
// console.log('Outside: '+d)            // error: d is not defined


// 什么是 undefined ？
// undefined: have a variable, but no value assigned to it




// 想一想这个例子为什么这个 var 和 let 结果会不一样？
// 与 scope 有关
var funcs1 = []
for (var i=0; i<3; i++) {
    funcs1[i] = function(){
        console.log("My Value: "+i)
    };
}

for(var j=0;j<3;j++){
    funcs1[j]()
}

// repeate the same thing above, just change var to let
var funcs2 = []
for (let i=0; i<3; i++) {
    funcs2[i] = function(){
        console.log("My Value: "+i)
    };
}

for(var j=0;j<3;j++){
    funcs2[j]()
}







// HOISTING
// var can be hoisted
// let cannot be hoisted

// var can be hoisted 的证据
(function fn(){
    // var a;      // var can be hoisted, 虽然没有这行，但就好像有这行，因为 var can be hoisted, var can be lifted up

    console.log(a)    // undefined: 这里并不会 throw exception，而是会说 undefined，但我们并没有在这行之前 declare a；这就是 var a 被hoisted 的 proof
    var a = 99
    console.log(a)

})();


// let cannot be hoisted 的证据
(function fn(){
    // let a;      // let cannot be hoisted

    console.log(a)      // error: 因为没有被 declare，所以不能access it
    let a = 99
    console.log(a)

})();







// REDECLERATION
// 例 2: 
// var vs let 区别 2: 
// var can be redeclared, but let cannot
var f = "abc"
let g = "ABC"
console.log(f)
console.log(g)
var f = "def"
// let g = "DEF"       // error: Identifier 'g' has already been declared
console.log(f)
console.log(g)



// const: 赋值了就不能改
const PI = 23;
console.log(PI)
// PI = 91;                   // error

// const: const在声明时必须赋值
// const PI2;                 // error: Missing initializer in const declaration



