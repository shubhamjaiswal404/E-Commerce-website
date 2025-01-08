import express from 'express';
import userSchema from '../../models/admin.js';

const adminRegister = express.Router();

adminRegister.post('/register', async (req, res) => {
    const { name, phone, email, password } = req.body;
    const user = await userSchema.findOne({ email })
    try {
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const newUser = new userSchema({ name, phone, email, password });
        newUser.save();
        res.status(200).json({ message: "User registered successfully" })
    } catch (error) {
        console.error(error.message).json({ message: "Server Error" })
    }
})

export default adminRegister;
