var app = angular.module("app", []);
app.controller('emp', ['$scope',function($scope){         // 这里与之前的写法不同，但意思、效果是一样的
    $scope.msg = "This is message from scope"
}]);


app.directive("dir1", function(){
    return {
        template: "<b>This is dir1</b>"
    }
})


app.directive("myInfoMsg", function(){
    return {
        templateUrl:"my-info-msg_hello"
    }
})

// 从外部的 html 引入
app.directive("myInfoMsgLink", function(){
    return {
        templateUrl:"my-info-msg_1.html"
    }
})