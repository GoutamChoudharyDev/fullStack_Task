import mongoose, { Schema } from "mongoose";

// create user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
}, { timestamps: true });

// create user model
export const User = mongoose.model("User", userSchema);