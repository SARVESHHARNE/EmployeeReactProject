var mysql=require('mysql')
let connection=mysql.createConnection(
    {
        host:'127.0.0.1',
        user:'root',
        password:'root123',
        database:'wpt',
        port:3306
    }
)

connection.connect((err)=>{
    if (err) {
        console.log(err.message)
    }else{
        console.log('connected to database')
    }
})

module.exports=connection