const express = require('express');
const path = require('path');
require('./db/connection');
const newRoute = require('./router/route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const static_path = path.join(__dirname,"./views")
app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get('/',(req,res)=>{
  res.render('index.hbs');
}),
app.get('/signup',(req,res)=>{
    res.render('signup.hbs');
  }),
app.get('/userlogin',(req,res)=>{
    res.render('login.hbs');
  }),

app.use("/",newRoute);
app.listen(8080,()=>{
    console.log('start server :');
})