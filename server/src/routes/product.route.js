import { Router } from "express";
import { authMiddleware } from "../middlewares/user.middleware.js";
import { getAllProducts, updateProduct } from "../controllers/product.controller.js";

const router = Router();

// Api routes
router.get("/", authMiddleware, getAllProducts);
router.put("/:_id", authMiddleware, updateProduct);

// export router
export default router;