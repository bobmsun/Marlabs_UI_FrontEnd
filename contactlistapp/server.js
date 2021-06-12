var express = require('express')      // here we're using Express server. Express is a server for node js. If you want to use this package is JS file, you need to require it.
var app = express()      // invoke the construction and create an instance. This app means the entire web application
var mongojs = require('mongojs')
var db = mongojs('contactlist', ['contactlist'])       // need to specify the (database name, [connection name 1, connection name 2, ...]) here

app.use(express.json());
app.use(express.static(__dirname + '/public'));      // let our server knows to go to the public directory

app.get('/contactlist', function(req, res){
    // res.send("received req from controller")
    console.log("received req from controller")

    // Comment out the data, because we are getting it from the database
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
    // res.json(contactlist);

    // Get data from database. Here, we have a callback function.
    // Whenever find complete, this function will be run; Either we'll have an err or we'll have documents
    // So either err is null or docs is null
    db.contactlist.find(function(err, docs){
        // console.log(docs)
        res.json(docs)
    })
    // find: function, this function is acutally converted to Mongo DB query and get executed in the database.
    // db.(collection name).(function)

})


app.post('/contactlist', function(req, res){
    console.log(req.body)       // 如果不加 parser undefind, beacause we need a parser to read the date in the body

    // the latest Express has a body parser, 也可以自己安装别的 body parser
    
    // console.log(req.body instanceof Object)           // true
    // console.log(req.body instanceof String)           // false

    // insert the data into the database
    // if insert is successful, mongojs will return us the inserted data (docs)
    db.contactlist.insert(req.body, function(err, docs){
        // once the insertion is successful, we will send the inserted the data back to the controller for display
        res.json(docs)
    })
    
})


app.delete('/contactlist/:id', function(req, res){
    // delete needs to retrieve the id from the params
    var id = req.params.id
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);             // send back the deleted document
    })

})


app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
})


app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
                                  update: {$set: {name:req.body.name, email:req.body.email, number: req.body.number}},
                                  new: true}, 
                                  function(err, doc){
                                        res.json(doc);
                                  })
});


// 让这个 app 跑在 9000 端口
app.listen(9000, function(){
    console.log("Server running @9000")
})