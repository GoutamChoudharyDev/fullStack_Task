import 'dotenv/config';
import express from "express";
import cookiesParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./routes/user.route.js";
import ProductRouter from "./routes/product.route.js";

const app = express();

// middleware to parse JSON bodies
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


// default route
app.get("/", (_, res) => {
    res.send("Backend is working...")
})

// api routs
app.use("/api/auth", UserRouter);
app.use("/api/products", ProductRouter);

// export
export { app };