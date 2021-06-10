var app = angular.module('app',[])
app.controller('emp', function($scope, $rootScope){

    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 0;

    $scope.calcSum = function() {
        $scope.s = Number($scope.a) + Number($scope.b);
    }

});


var btnClick = function() {
    var $scope = angular.element($("#div")).scope();   // 这里$("#div")中的$ 是jQuery selector
    $scope.s = Number($scope.a) + Number($scope.b);
    $scope.$apply();                              // $apply will invoke the digest process

    // 以下写法和上面的效果一样
    // $scope.$apply(function(){
    //     $scope.s = Number($scope.a) + Number($scope.b);
    // })
}

