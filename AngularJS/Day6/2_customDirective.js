var app = angular.module("app", []);
app.controller('emp', ['$scope',function($scope){
    $scope.msg = "This is message from scope"
}]);

app.directive("myInfoMsg", function(){
    return {
        templateUrl:"my-info-msg.html"
    }
})