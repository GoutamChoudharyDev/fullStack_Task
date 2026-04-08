import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        // get token from cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        //  verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attach user to request object
        req.user = decoded;

        // call next middleware
        next();

    } catch (error) {
        console.error("Error in authMiddleware:", error);
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
}

// export
export { authMiddleware };