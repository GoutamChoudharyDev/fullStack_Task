import jwt from "jsonwebtoken";

const generateToken = (user) => {
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email
        },
        process.env.JWT_SECRET,

        { expiresIn: process.env.JWT_EXPIRES_IN });

    return token;
}

export { generateToken };