import { Router } from "express";
import { createProduct, getAllProduct, getProductById, removeProduct, updateProduct } from "../controllers/product";

const productRoutes = Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProduct);
productRoutes.delete("/:id", removeProduct);
productRoutes.patch("/:id", updateProduct);
productRoutes.get("/:id", getProductById);

export default productRoutes;
