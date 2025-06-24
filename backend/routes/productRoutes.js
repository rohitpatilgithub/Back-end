import express from "express";
import { deleteProduct, getProducts, postProducts, updateProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);

router.post("/", postProducts);

router.put(("/:id"),updateProducts)

router.delete("/:id" ,deleteProduct)

export default router;