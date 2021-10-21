
const express=require("express");
const axois=require("axios");

const app =express();

app.get('/',(req,res)=>{
    let request=req.query.name;
    let promise=new Promise((resolve,reject)=>{
            if(request!==undefined){
                resolve("hello "+request);
            }else{
                reject("Data not found");
            }
    });

    promise.then((response) => {
        res.status(200).json({'Message': response})
    }).catch((err) => {
        res.status(400).json({"Error": err})
    })
})

app.listen(3001,()=>{
    console.log("Server connected");
})