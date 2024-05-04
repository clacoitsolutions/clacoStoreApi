import express from "express"; 
import { productCategory } from "../controllers/productCategoryController.js";


const router = express.Router();

router.post("/postproductcategory",productCategory)


export default router;