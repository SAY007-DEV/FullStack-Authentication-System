import User from "../Models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
    const {email , password} = req.body;
    console.log(req.body);
    try {
        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({message: "User already exists, please login"});
        }
      
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.status(201).json({ user, token });
            res.status(201).json({ "user created successfully": user });
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
        console.error(error);
        
        
    }
};


export const Login = async (req,res)=>{
    const {email, password}=req.body;
    try {
        const existinguser = await User.findOne({email});
    if(!existinguser){
        return res.status(404).json({message: "User not found, please register"});
    }

    const checkpass = await bcrypt.compare(password, User.password)
    if(!checkpass){
        return res.status(400).json({message: "Invalid credentials"});
    }
    const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ user: existinguser, token });
    res.status(201).json({ "login successfully": existinguser });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }
}
