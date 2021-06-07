// 因为我们用的是 node environment，所以鼻祖是 Oject
// 如果用 browser 的话，鼻祖就是 document
// Browser provide us the document object and the environment to run JS

// 上节课讲了 如何用 bind to redirect the this key word

// We are going to use binding a lot in React

var pokemon = {
    firstName: 'Pika',
    lastName: 'Chu',
    getPokeName: function(){
        var fullName = this.firstName+' '+this.lastName;
        return fullName;
    }
}


// 以下4行不会 work，因为 this 没有 getPokeName() 函数
// 自我注意：以下4行只是定义了一个function，并没有函数调用
var pokemonName = function(snack, hobby){
    console.log(this.getPokeName() + ' I choose you')
    console.log(this.getPokeName() + ' loves ' + snack + ' and' + hobby)
}

// 这个函数不属于任何 object，那么函数中的 this 怎么办，指向谁？
// 这是需要用 bind 关键字
// bind the function PokemonName to the object

// 接下来，我们想让它 work，我们想要 bind 上面 4 行中的 this with the pokemon object

// bind -- React
var bindPokemon = pokemonName.bind(pokemon);
// 100 lines of code
bindPokemon('sushi','javascript')

console.log(bindPokemon)

// bindPokemon is an object, it is a function
// Whenever we create a function, it is an object. (function 是一个 object)
// 既然 function 是一个 object，那么就意味着 it can be used as an object: 就意味着 function 可以 做一切 object 可以做的事，
// 例如，it can be passes to a function, it can be returned by a function, it can be assigned to a variable.




// Chrome and node.js use V8 engine to run JavaScript

// V8 engine is written in C++，所以run得很快 (所以说，JS is supported by C++, it is very fast.)

// V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js

// 摘自: https://v8.dev/

// Ajax: let JS to call server side function, e.g. server side function in Java





// 接下来：bind v.s. call v.s. apply

// 2. call
// 可以用 call 和 apply 达到上面 bind 同样的效果

pokemonName.call(pokemon, 'sushi','javascript')        // parameters: (the object we want to bind to, argument1, argument2)

pokemonName.apply(pokemon, ['sushi','javascript'])     // The difference between call and apply is just the way we provide the arguments



// bind v.s. call v.s. apply 对比

// bind: get back a new function

// call: execute immediately

// apply: the way we provide the argument 与 call 不同，it is an array


// 为什么 bind 重要？
// 在 React 中，button event has to bind with the component object
