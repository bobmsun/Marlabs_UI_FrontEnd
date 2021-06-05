var myApp = angular
                  .module("myModule", [])
                  .controller("myController", function($scope){
                      var country = {
                          name:'USA',
                          capital:"Washington DC",
                          flag:"/Day 5/本节课第二个html+js/images/flag.jpg"
                      }

                      var employees = [
                        { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                        { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                        { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                        { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                        { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
                    ];

                    var technologies = [
                        {name:"Kotlin", likes:0, dislikes:0},
                        {name:"React", likes:0, dislikes:0},
                        {name:"Angular", likes:0, dislikes:0},
                        {name:"VueJS", likes:0, dislikes:0},
                        {name:"Swift", likes:0, dislikes:0},
                        {name:"Hibernate", likes:0, dislikes:0},
                        {name:"Spring", likes:0, dislikes:0},
                    ]


                    var emps = [
                        { name: "Ben", gender: "Male", city: "London", salary: 55000 },
                        { name: "Sara", gender: "Female", city: "Chennai", salary: 68000 },
                        { name: "Mark", gender: "Male", city: "Chicago", salary: 57000 },
                        { name: "Pam", gender: "Female", city: "London", salary: 53000 },
                        { name: "Todd", gender: "Male", city: "Chennai", salary: 60000 }
                    ];

                      $scope.emps = emps;              // 这里暴露出去的名字 和 真实的名字可以不相同，例如 $scope.abc = emps 也是ok的
                      $scope.country = country;
                      $scope.name = "Will"
                      $scope.employees = employees
                      $scope.technologies = technologies

                      $scope.incrementLikes = function(technology){
                          technology.likes++;
                      }

                      $scope.incrementDisLikes = function(technology){
                        technology.dislikes++;
                    }

                  })