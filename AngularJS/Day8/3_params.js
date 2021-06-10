var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl:'sumurl.html',
        controller:"sumurl"
    })
});

app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a
    $scope.b = $routeParams.b
})