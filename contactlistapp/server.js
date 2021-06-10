var express = require('express')
var app = express()      // invoke the construction and create an instance. This app mean s the entire web application

app.use(express.static(__dirname + '/public'));      // let our server knows to go to the public directory

app.get('/contactlist', function(req, res){
    // res.send("received req from controller")
    console.log("received req from controller")

    person1 = {
        name: "John",
        email: "john@gmail.com",
        number: "(111) 111-1111"
    };
    person2 = {
        name: "Jim",
        email: "jim@gmail.com",
        number: "(222) 222-2222"
    };
    person3 = {
        name: "Jill",
        email: "jill@gmail.com",
        number: "(333) 333-3333"
    };

    var contactlist = [person1, person2, person3]
    res.json(contactlist);
})

app.listen(9000, function(){
    console.log("Server running @9000")
})