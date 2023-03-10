const express =require('express');
const cors =require('cors');
require('./config/db')

const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello world')
});


app.use((req,res,next)=>{
    res.status(404).json({
        "message":"route not found"
    })
});

app.use((err,req,res,next)=>{
    res.status(500).json({
        "message":"something broke"
    })
});


module.exports=app;