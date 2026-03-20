// import User from "../models/user.model.js"
export const register = async(req,res) =>{
    const {name,email,password,role} = req.body;

    res.send("hello word");
}

