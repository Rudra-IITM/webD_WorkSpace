const fs=require("fs");

fs.writeFile("message.txt","Hello There",(err)=> {
    if (err) throw err;
    console.log("File saves");
});