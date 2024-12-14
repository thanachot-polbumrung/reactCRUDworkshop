const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const port = 3001;
const multer = require("multer");

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root999",
    database:"users"
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
  res.send({ imageUrl: `http://localhost:3001/images/${filename}` });
});


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

// app.listen("3001",()=>{
//     console.log("server running 3001")
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });