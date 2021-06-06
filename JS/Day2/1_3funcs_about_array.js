// 关于 Array，there are 3 functions you need to know: map. reduce, filter

// 但是在介绍这三个函数之前，需要先 学习一下 forEach

// what we have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

// What we want 
// [20, 24, 56, 88]， 需要怎么做呢？ 可以用 forEach

// forEach
var officersId = [];
officers.forEach(function(officer){
    officersId.push(officer.id)
})

console.log(officersId)





// map
// 以上操作可以不用建一个 array，直接用 map 就可以实现同样的效果
var Ids = officers.map(function(officer){
    return officer.id
})
console.log(Ids)





// reduce
var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];


var totalYears = pilots.reduce(function(sum, pilot){
    return sum + pilot.years
}, 0)
// sum 是 accumulator；0 是 initial value；如果改成 10，结果就会从 82 变成 92

console.log(totalYears)






// filter
var pilots2 = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
];
var rebels = pilots2.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots2.filter(function (pilot) {
  return pilot.faction === "Empire";
});

console.log(rebels)
console.log(empire)







// 练习题：一个需要综合上述三个function一起用的 题目
// 想要把所有 isForceUser 为 true 的人的 politingScore 和 shootingScore 加和
var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];


var totalJediScore = personnel
.filter(function (person) {
  return person.isForceUser;
})
.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
})
.reduce(function (acc, score) {
  return acc + score;
}, 0);

console.log(totalJediScore)            // 98 + 56 + 43 + 67 + 71 + 85 = 420