import express from 'express';
import userSchema from '../../models/user.js';

const Login = express.Router();
Login.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await (userSchema.findOne({ email }))
    try {
        if (user) {
            if (user.password === password) {
                res.status(200).json({ message: "Login successful" })
            } else {
                res.status(400).json({ message: "Invalid Credentials" })
            }
        }
        else {
            res.status(400).json({ message: "User doesn't exist" })
        }
    } catch (error) {
        console.error(error.message).json({ message: "Server Error" })
    }
})

export default Login;