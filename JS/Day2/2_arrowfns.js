var sum = (x,y) =>  {
    return x*y
}

var result = sum(11,22)
console.log(result)


// 1. Arrow functions don't have this, but borrows from the outer scope
// 2. Arrow functions can't be used with new -- because pt 1
// 3. Arrow functions have no "arguments"
// 4. can't be called with super


let group = {
    title: "Math Group",
    students: ["John", "Mary", "Bill"],

    showList(){
        this.students.forEach(
            student => console.log(this.title + ':' + student)   // arrow function 没有this，它的 this is borrowed from the outer scope (in this case, 是 showList() 的 this)
        )
    }
}

group.showList()


// 将上述逻辑 用普通函数 normal function 改写，不用箭头函数了
let group1 = {
    title: "Math Group",
    students: ["John", "Mary", "Bill"],

    showList(){
        this.students.forEach(function(student){
            console.log(this.title + ':' + student)     // 在这个 function 的 scope 依然没有 this，但是普通函数不会去 bowrrow 外层的this；这就是普通函数 与箭头函数的区别
        }
        );
    }
}

group1.showList()