import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";
let app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.get("/hello",(req,res)=>{
    res.json({subjects:[10,24,23,21]});
})

app.use("/api",router);

app.listen(3000,()=>{console.log("SERVER is running")});

//RUDRAS COMMENT HERE
// Hey Varun Commented here
