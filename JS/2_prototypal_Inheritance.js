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
        }
    }
}
let lizard = {
    name:"Kiki",
    fight(){
        return 5
    }

}

//borrow the sing method for the lizard obj
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())

// fn.prototype

lizard.__proto__ = dragon
console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight())