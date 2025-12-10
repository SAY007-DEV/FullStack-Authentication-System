import { log } from "console";
import Otp from "../Models/otpModels";
import sendOtp from "../Utilitys/SendMail";
import crypto from "crypto";


export const otp = async (req, res)=>{
    const {email} = req.body;
    try {
        const existinguser = Otp.findOne({email});
        if(!existinguser){
            return res.status(404).json({message: "User not found, please register"});
        }
      
       const generatedOtp = crypto.randomInt(300000, 999999).toString();
       Otp.otp = generatedOtp;
       otp.createdAt = Date.now();
         await Otp.save();
         await sendOtp(email, generatedOtp);
         log("OTP sent to email:", email);


        res.status(200).json({ email, otp: generatedOtp, message: "OTP generated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}