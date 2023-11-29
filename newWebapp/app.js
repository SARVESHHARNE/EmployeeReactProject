const express=require('express')
var app=express()
var router=require('./routes/routers.js')
var bodyparser=require('body-parser')
var path=require('path')

app.set("views",path.join(__dirname,"views"))
app.set('view engine','ejs')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/',router)

app.listen(9000,(err)=>{
    if (err) {
        console.log("error in server creation ")
    }else{
        console.log('server started at port no 9000')
    }
})

module.exports=app