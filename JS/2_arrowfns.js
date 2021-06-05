var sum = (x,y) =>  {
    x*x
}

sum(11,22)

//1. Arrow fns dont have this, but borrows from the outer scope
//2. Arrow funs cant be used with new -- bcoz pt 1
//3. Arrow functions have no "arguments"
//4. cant be called with super

// let group = {
//     title:"Math Group",
//     students:["John", "Mary", "Bill"],

//     showList(){
//         this.students.forEach(
//             student => console.log(this.title+':'+student)
//         )
//     }
// }


let group = {
    title:"Math Group",
    students:["John", "Mary", "Bill"],

    showList(){
        this.students.forEach(function(student){
            console.log(this.title+':'+student)
        }
        );
    }
}


group.showList()