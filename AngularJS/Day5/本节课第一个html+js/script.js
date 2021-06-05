// module
// Module is a container of other stuff in Angular (module is a container of directives and controllers)
// directives 是 custom html tags, attributes
var myapp = angular.module('myModule',[]);     // 这里的[]代表没有dependency


// connect the module with the controller
myapp.controller("myController", function($scope){
    var employee={
        firstName:"John",
        lastName:"Wick",
        dept:"Sales"
    }

    $scope.employee = employee;
})


myapp.controller("myController1", function($scope){
    $scope.message = "Second Controller";
})



