import { Router } from "express";
import { getCurrentUser, userLogin, userLogout, userSignup } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/user.middleware.js";

const router = Router();

// Api routes
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.get("/me", authMiddleware, getCurrentUser);

export default router;