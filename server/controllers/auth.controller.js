import User from "../models/user.model.js";
import otpgeneration from "otp-generator";
import bcrypt from "bcrypt";
import redisClient from "../config/redis.js";
import sendOtpEmail from "../utils/sendOtp.js";
import generateToken from "../utils/generateToken.js"
export const register = async(req,res) =>{
    try{
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(404).json({msg:"Fill All the required field."});
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({msg:"Allready Exist !"});
        }
        const otp = otpgeneration.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
        const hashedPassword = await bcrypt.hash(password,10);
        await redisClient.set(
            `register:${email}`,
            JSON.stringify({ name, email, password: hashedPassword }),
            { EX: 300 }
        );
        await redisClient.set(`otp:${email}`, otp, { EX: 300 });

        await sendOtpEmail(email, otp);
        return res.status(200).json({ msg: "OTP sent successfully" });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({msg:"Something went wrong."})
    }
}

export const verifyOtp = async(req,res)=>{
    try{
        const {email,otp} = req.body;
        const storedOTP = await redisClient.get(`otp:${email}`);
        if (!storedOTP) {
            return res.status(400).json({ msg: "OTP expired" });
        }
        if (storedOTP != otp) {
            return res.status(400).json({ msg: "Invalid OTP" });
        }
        const userData = await redisClient.get(`register:${email}`);
        if (!userData) {
            return res.status(400).json({ msg: "Registration data expired" });
        }
        const { name, password } = JSON.parse(userData);
        const newUser = await User.create({
            name,
            email,
            password,
        });
        await redisClient.del(`otp:${email}`);
        await redisClient.del(`register:${email}`);
        res.json({ msg: "User registered successfully", user: newUser });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }

}

export const login = async(req,res)=>{
    try{

        const{email,password} = req.body;
        if(!email|| !password){
            return res.status(400).json({msg:"Fill All the required Fields."})
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({msg:"user not Exist"});
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({msg:"Password is Wrong"})
        }
        const token = generateToken(user._id);
        return res.status(200).json({sucess:true,token,user:{
            id:user._id,
            email:user.email,
            name:user.name}
        });

    }

    catch(err){
        return res.status(500).json({msg:err});
    }
}