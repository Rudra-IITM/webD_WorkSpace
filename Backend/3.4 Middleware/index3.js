import express from "express";

function customMW(req,res,next){
  console.log("Request method: ",req.method);
  console.log("Request url: ",req.url);
  next();
}

const app = express();
const port = 3000;

app.use(customMW);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
