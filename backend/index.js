import express from "express";
import cors from "cors";
let app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.get("/hello",(req,res)=>{
    res.json({subjects:[10,24,23,21]});
})

app.listen(3000,()=>{console.log("SERVER is running")});

//RUDRAS COMMENT HERE