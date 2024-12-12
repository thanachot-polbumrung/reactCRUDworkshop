const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root999",
    database:"users"
})


app.get("/users",(req,res)=>{
    
    db.query("SELECT * FROM userproflie",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id
    db.query("DELETE FROM userproflie WHERE id=?",id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen("3001",()=>{
    console.log("server running 3001")
})