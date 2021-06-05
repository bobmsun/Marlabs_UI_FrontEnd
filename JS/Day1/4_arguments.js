// arguments is an object
// arguments 是 pre-build keyword


function add(){
    let sum = 0;
    for(let a of arguments)
    {
        sum += a;
    }
    console.log(sum)
    console.log(arguments instanceof Array)    // arguments 不是一个 array
    console.log(arguments)
    console.log(arguments[0])         // arguments 不是一个 array，但是具有数组的属性；有 length 属性，可以按照索引查询
}

add(1,2,3,4,5,6,7)