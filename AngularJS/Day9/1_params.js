var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl:'sumurl.html',
        controller:"sumurl"
    })
    .when('/suminput', {
        templateUrl:'suminput.html',
        controller:"suminput"
    })
    .when('/', {
        template:'<b>Welcome to the APP</b><i>Click on the Links</i>'
    })
    .otherwise({
        template:'<b>No Content Available</b><i>Click on the Links</i>'
    })
});


// 想要达到的效果：想要让 sumurl 这个 page 只take input，然后 去 sumurl 这个page 里看sum 结果

app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a
    $scope.b = $routeParams.b
})

app.controller('suminput', function($scope, $location, $interpolate){
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)      // 怎样能够带着a，b 的信息 redirect 到 sumurl page？ 这里展示了做法，先用interpolate把url 准备好
        console.log(url)                                           // （打印一下url看一下是什么样）
        $location.path(url);                                       // 然后在用location 去 redirect 到 url 的 page
    }
})