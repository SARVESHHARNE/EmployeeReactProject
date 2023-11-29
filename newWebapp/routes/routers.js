const express=require('express')
let myrouter=express.Router()

const connection=require('../dbs/database')


myrouter.get("/display",(req,resp)=>{
    connection.query("select * from Employee",(err,data,fileds)=>{
        if (err) {
            resp.status(404).send("page not found")
        }else{
            resp.send(data)
            
        }
    })
})

myrouter.get("/display/:eid",(req,resp)=>{
    connection.query("select * from Employee where eid=?",[req.params.eid],(err,data,fileds)=>{
        if (err) {
            resp.status(404).send("page not found")
        }else{
            resp.send(data)
            
        }
    })
})

myrouter.post('/input',(req,resp)=>{
    connection.query('insert into Employee values(?,?,?,?)',[req.body.eid,req.body.ename,req.body.dept,req.body.salary],(err)=>{
        if (err) {
            resp.status(404).send("fails to insert data")
        }
        else{
            resp.send('added successfully')
        }
    })
})

myrouter.delete('/delete/:eid',(req,resp)=>{
    connection.query('delete from Employee where eid=?',[req.params.eid],(err)=>{
        if(err){
            resp.status(404).send("fails to delete data")
        }else{
            resp.send('deleted successfully ')
        }
    })

})

myrouter.put('/update/:eid',(req,resp)=>{
    connection.query('update Employee set ename=?,dept=?,salary=? where eid=?',[req.body.ename,req.body.dept,req.body.salary,req.body.eid],(err)=>{
        if (err) {
            resp.status(404).send('fails to update')
        }else{
            resp.send('update successfully ')
        }
    })
})

module.exports=myrouter