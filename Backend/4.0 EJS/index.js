import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    const d=new Date();
    const day=d.getDay();

    let type= "weekDay";
    let msg= "Its time to work hard";
    if (day==0 || day==6){
        type= "weekend";
        msg = "Its time to have fun";
    }
    res.render("index.ejs",{ 
        dayType: type,
        message: msg,
    });
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});