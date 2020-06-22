const express = require("express");
const multer = require('multer');
const upload = multer({dest:"tmp_upload"});

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",function(req,res){
    res.render("main",{
        name:'dcharlie',});
});

// app.get("/abc",function(req,res){
//     res.send("<h1>Hello ABC</h1>");
// });

app.get("/json-sales",(req,res)=>{
    const sales =require(__dirname + "/../data/sales.json");
    // console.log(data);
    // res.json(data);
    res.render("json-sales",{sales});
});

app.get("/try-qs",function(req,res){
    res.json(req.query);
});

app.get('/try-post-form', (req, res)=>{
    res.render('try-post-form');
});

app.post('/try-post-form', (req, res)=>{
    res.render('try-post-form', req.body);
    // res.json(req.body);
});

app.post('/try-upload', upload.single('avatar'), (req, res)=>{
    res.json(req.file);
});



app.use(express.static("public"));

app.use(function(req,res){ 
    res.type('text/plain');
    res.status(404);
    res.send('404-cant found');
});



app.listen(3000,function(){
    console.log("server started,port:3000");
});

