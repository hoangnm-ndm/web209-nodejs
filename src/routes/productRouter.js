import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/product.js";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);

export default productRouter;
