import User from "../models/user.model.js";
import bycryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, statusCode: 400, message: 'All fields are required.' });
    }
    const hashedPassword = bycryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("user created successfully!");
    } catch (error) {
        next(error);
    }
};