let dragon = {
    name:'Tanya',
    fire:true,
    fight(){
        return 9
    },
    sing(){
        if(this.fire)
        {
            return `I am ${this.name}, the breathre of fire`
        } else {
            return 'else block'
        }
    }
}

let lizard = {
    fire: true,
    name:"Kiki",
    fight(){
        return 5
    }
}

let lizard1 = {
    name:"Kiki",
    fight(){
        return 5
    }
}


// BINDING
// borrow the sing method for the lizard obj
const singLizard = dragon.sing.bind(lizard)   // 把 dragon 的 sing 函数 和 lizard object bind 到一起，sing函数需要 lizard object 中一定要有一个 fire
console.log(singLizard())


const singLizard1 = dragon.sing.bind(lizard1)   // 把 dragon 的 sing 函数 和 lizard object bind 到一起，sing函数需要 lizard object 中一定要有一个 fire
console.log(singLizard1())


// PROTOTYPE

// How to access 一个 function 的 prototype？ 用 .prototype
// 例如：function_name.prototype

// How to access 一个 object 的 prototype？ 用 __proto__
// 例如：lizard.__proto__

console.log(lizard1.fire)      // undefined

lizard1.__proto__ = dragon    // 让 lizard1 继承了 dragon
console.log(lizard1.sing())
console.log(lizard1.fire)
console.log(lizard1.fight())