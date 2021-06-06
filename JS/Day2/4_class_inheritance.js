class Animal{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello(){
        console.log(`Hi I am ${this.name} from the animal kingdom`)
    }
}

console.log("print Animal: ", Animal)

//create an object
let king  = new Animal('Lion King', 4.5)
console.log("print king: ", king)
king.hello()






class Lion extends Animal{
    constructor(name, height, color){
        super(name, height)
        this.color = color
    }
    callParentHello(){
        super.hello()
    }
    hello(){
        console.log("From Child")
    }
}

let l = new Lion("Tiger", 5,"Stripes")
l.hello()
l.callParentHello()






// 关于使用 super
class A{
    constructor(x){
        this.a = x
    }
}
class B extends A{
    constructor(x,y){
        super(x)
        this.b = y
    }
}
class C extends B{
    constructor(x,y,z){
        super(x,y)
        this.c = z
    }
}

obj = new C(11,22,33)