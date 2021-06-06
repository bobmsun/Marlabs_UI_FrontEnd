// Capturing: access higher function variable in the inner function
// 例 1:
function outer(a=1,b=2){
    var name="John Wick";

    function inner(c=3,d=4){
        var innerName = "Spiderman"
        console.log(name,' ',a,' ',b)
    }

    return inner;
}

var result = outer();    //outer fn ends, call stack is removed, memory is cleared
result();                // after outer() is done, the variable name 并没有被clear，still in memory

setTimeout(result, 3000)      // execute result() after 3 sec, name is still accessible




// 例 2: 
function outer2(a2=1,b2=2){
    var name2="John Wick";

    function inner2(c=3,d=4){
        var innerName2 = "Spiderman"
        console.log(name2,' ',a2,' ',b2)

        function innermost(){
            console.log(name2,' ', innerName2)
        }
        innermost()
    }
    inner2()
}

outer2()




// 下节课开始讲 prototype，先开个头
// prototype 就像 inheritance
// inheritance happens through prototype
// Object is the parent class of every object we create


var name = "John"
// name 有 length 属性
// name 也有 toString() 函数，从哪来的？ 从 Object 继承来的
