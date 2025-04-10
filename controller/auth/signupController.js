const User = require("../../model/userModel");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Email Transporter

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

const signupController = async (req,res)=>{
    const {firstName, lastName, email, password} = req.body;
    // validate the data

    try{
    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({message:"Please fill all fields"});
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the inactive user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isVerified: false,
    });

    // Generate a email verification token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h",});
    
    const varifyUrl = `${process.env.FRONTEND_URL}/verify-email/${token}`;

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: "Verify your email",
        html: `<p>Click <a href="${varifyUrl}">here</a> to verify your email.</p>`,
      });
      res.status(200).json({ message: "Verification email sent" });
    }catch(err){
        console.error(err);
    res.status(500).json({ message: "Signup failed" });
    }

}

const varifyemail = async (req, res) => {
  console.log("requiest come here ");
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    const user = await User.findByIdAndUpdate(decoded.id, { isVerified: true });
    console.log("Decoded token:", decoded);
    console.log("User updated:", user);


    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ message: "Email verified. You can now log in." });
  } catch (err) {
    console.error("Verification error:", err);
    res.status(400).json({ message: "Invalid or expired verification link." });
  }
}

module.exports = {signupController, varifyemail};