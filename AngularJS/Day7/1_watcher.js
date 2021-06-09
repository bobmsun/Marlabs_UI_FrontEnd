var app = angular.module('app',[])
app.controller('msg', function($scope, $rootScope){

    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    // We want to create our own watcher, 不想让 Angular create watcher for us
    // There is a way to create watchers by ourselves to watch the value change
    // If the value changes, we can do something.
    $scope.$watch('a', function(newV, oldV){
        if(newV != oldV)
            console.log('a modified to '+newV)
    })
    $scope.$watch('b', function(newV, oldV){
        if(newV != oldV)
            console.log('b modified to '+newV)
    })
    $scope.$watch('c', function(newV, oldV){
        if(newV != oldV)
            console.log('c modified to '+newV)
    })

    $rootScope.$watch(function(){
        console.log('--digest iteration started---')
    })


    $scope.emps = [
        {empno:"1001", ename:"John"},
        {empno:"1002", ename:"Jim"},
        {empno:"1003", ename:"Will"},
        {empno:"1004", ename:"Shawn"}
    ]

    $scope.addEmp = function(){
        var newEmpNo = 1000 + $scope.emps.length +1;
        var newEname = "ename"+newEmpNo;

        $scope.emps.push({empno:newEmpNo, ename:newEname})
    }

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "Test"
    }

    // Deep/equality watcher
    // 如何将普通 watcher 变成 equality watcher？ 只需加入一个参数 true 即可
    $scope.$watch('emps', function(newV, oldV){
        console.log("No of employees: "+ $scope.emps.length)
    }, true)
    
    // 下面的 code 用 watchCollection 也可以达到上面同样的效果
    // $scope.$watchCollection('emps', function(newV, oldV){
    //     console.log("No of employees: "+ $scope.emps.length)
    // })
});
