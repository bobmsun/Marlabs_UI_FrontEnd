// 之前，normally we have,    var app = ....    don't have to do that in Angular 1.2
// Below 与之前的一样，is a controller
function AppCtrl($scope, $http){
    console.log("Hello from Controller");

    // $http is a service, is not a module; 可以去Angluar 官网上搜 $http
    // 这里没有button，而是 controller makes a directs call to express
    $http.get('/contactlist').success(function(response) {                // 这里的 '/contactlist' 其实是一个 url
        console.log("I got the data", response)
        $scope.contactlist = response;
    })

    // person1 = {
    //     name: "John",
    //     email: "john@gmail.com",
    //     number: "(111) 111-1111"
    // };
    // person2 = {
    //     name: "Jim",
    //     email: "jim@gmail.com",
    //     number: "(222) 222-2222"
    // };
    // person3 = {
    //     name: "Jill",
    //     email: "jill@gmail.com",
    //     number: "(333) 333-3333"
    // };

    // var contactlist = [person1, person2, person3]

    // // send it across the view
    // $scope.contactlist = contactlist;
}