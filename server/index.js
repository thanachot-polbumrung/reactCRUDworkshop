require('dotenv').config();
const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const port = process.env.PORT ;
const multer = require("multer");

app.use(cors())
app.use(express.json())



const db = mysql.createConnection({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

app.use(cors());

app.use("/images", express.static("uploads"));

const storage = multer.diskStorage({
  // Set destination directory
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  // Set filename
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('ไม่ใช่ไฟล์รูปภาพ!'), false);
    }
};

const upload = multer({ storage: storage,fileFilter,limits:{fileSize:1024*1024*25} });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  const { filename } = req.file;
  res.send({ imageUrl: `http://localhost:${port}/images/${filename}` });
});

app.post("/create",(req,res)=>{
    const imagePath = req.body.imagePath
    const fname = req.body.fname
    const lname = req.body.lname
    const gender = req.body.gender
    const birthday = req.body.birthday

    db.query(
        "INSERT INTO userproflie (image_path, fname, lname, gender, birthday) VALUE(?,?,?,?,?)",
        [imagePath, fname, lname, gender, birthday],
        (err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send("Values inserted")
            }
        }
    )
    
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

app.get("/user/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM userproflie WHERE id=?",id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result[0])
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

app.put("/edit",(req,res)=>{
    const id = req.body.id
    const fname=req.body.fname
    const lname=req.body.lname
    const gender=req.body.gender
    const birthday=req.body.birthday
    const image_path=req.body.imagePath
    console.log(req.body)
    db.query("UPDATE userproflie SET image_path=?, fname=?, lname=?, gender=?, birthday=? WHERE id=?",[image_path,fname,lname,gender,birthday,id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("result")
        }
    })
})

// app.listen("3001",()=>{
//     console.log("server running 3001")
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });