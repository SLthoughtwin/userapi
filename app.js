const express = require('express');
require('./db/connection');
const newRoute = require('./router/route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use("/",newRoute);
app.listen(8080,()=>{
    console.log('start server :');
})