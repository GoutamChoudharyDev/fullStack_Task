import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

// signup controller
const userSignup = async (req, res) => {
    try {
        // get data from request body
        const { username, email, password } = req.body;

        // validate data
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // send response
        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error("Error in userSignup controller:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// login controller
const userLogin = async (req, res) => {
    try {
        // get data from request body
        const { email, password } = req.body;

        // validate data
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // compare password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // generate token
        const token = generateToken(user);

        // set token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" || true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        // send response
        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.error("Error in userSignup controller:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// logout controller
const userLogout = async (req, res) => {
    try {
        // get token from cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({
                message: "No token found"
            });
        }

        // clear token cookie
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" || true,
            sameSite: "strict",
        });

        // send response
        return res.status(200).json({
            message: "Logout successful"
        });
    } catch (error) {
        console.error("Error in userLogout controller:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// get current user controller
const getCurrentUser = async (req, res) => {
    try {
        // get user from request object
        const user = req.user;

        // send response
        return res.status(200).json({
            user: {
                // id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error in getCurrentUser controller:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// export controllers
export {
    userSignup,
    userLogin,
    userLogout,
    getCurrentUser
};