// 之前，normally we have,    var app = ....    don't have to do that in Angular 1.2
// Below 与之前的一样，is a controller
function AppCtrl($scope, $http){
    console.log("Hello from Controller");

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


    var refresh = function(){
        // $http is a service, is not a module; 可以去Angluar 官网上搜 $http
        // 这里没有 button，而是 controller makes a directs call to express
        $http.get('/contactlist').success(function(response) {                // 这里的 '/contactlist' 其实是一个 url
            // console.log("I got the data", response)
            $scope.contactlist = response;
            $scope.contact = ""              // 需要这行，因为想让 refresh 后 input 框中的 input text 消失
        });
    }

    refresh();

    $scope.addContact = function(){
        console.log($scope.contact)         // 这里的contact object 会有 name, email, number

        // console.log($scope.contact instanceof Object)       // true
        // console.log($scope.contact instanceof String)       // false

        $http.post('./contactlist', $scope.contact).success(function(response){
            console.log(response)    // it actually comes back with an ID, meaning it is inserted into the database
            refresh()
        })
    }

    $scope.remove = function(id){
        console.log(id)      // 基于 id 从 database 中删除
        $http.delete('/contactlist/' + id).success(function(response){
            refresh();       // delete 成功后更新界面
        })
    }

    $scope.edit = function(id){
        console.log(id)
        $http.get('/contactlist/' + id).success(function(response){
            // put it in the scope so that is can get displayed in the input box
            $scope.contact = response;
        })
    }

    $scope.update = function(){
        console.log($scope.contact._id);
        // 这里的 $scope.contact 是 update 后的 new data
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
            refresh();
        })
    }
}