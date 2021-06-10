var app = angular.module('app', ['ngRoute'])             // 需要有 ngRoute 这个dependancy

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:'<b>This is the First Message</b>'
        templateUrl:'msg1.html',
        controller: 'message1'    // 这里要 sepciafy controller so that html 中的 {{a}} 和 {{b}} 知道是什么意思
    })
    .when('/second-msg', {
        // template:'<b>This is the Second Message</b>'
        templateUrl:'msg2.html',
        controller: 'message2'
    })
    .when('/third-msg', {
    //    redirectTo:'/second-msg'

          redirectTo: function(){
              alert("No implementation...redirecting to SECOND")
              return '/second-msg'
          }
    })
    .when('/', {
        template:'<b>The Root URL</b>'
    })
    .otherwise({
        template:'<b>Please Click the links on Left (otherwise block)</b>'
    })
}]);

app.controller('message1', function($scope){
    $scope.a = 10;
    $scope.b = 20;
})

app.controller('message2', function($scope){
    $scope.c = 30;
    $scope.d = 40;
})