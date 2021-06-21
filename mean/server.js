
const express = require('express')
const path = require('path')

const app = express();
app.use(express.json());

const api = require('./server/routes/api')
const port = 3000
app.use(express.static(path.join(__dirname, 'dist')))

//localhost:3000/api
app.use('/api', api)

//any other route
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})


//start the server
app.listen(port, function(){
    console.log("Server running on localhost:"+port)
})