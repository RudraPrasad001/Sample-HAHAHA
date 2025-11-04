import jwt from "jsonwebtoken";
import express from "express";
const router = express.Router();

router.post("/login",(req,res)=>{
    let {mail,pass} = req.body;
    let user = {
        mail:"rudra@gmail.com",
        pass:"abc",
        year:2,
        dept:"IT"
    }
    if(mail == "rudra@gmail.com" && pass=="abc"){
        let token = jwt.sign(user,"uueiyQDASUKH9281308WQO");
        return res.json({isSuccess:true,Token:token});
    }
    return res.json({isSuccess:false,message:"Wrong Password"})
})

router.get("/getnotes",(req,res)=>{
    let token = req.headers.authorization;
    if(!token) return res.json({error:"Token not found"});
    let user = jwt.verify(token,"uueiyQDASUKH9281308WQO");
    if(!user) return res.json({error:"Invalid user"});
    console.log("wow")
    console.log(user)
    res.json(user);
})

export default router;