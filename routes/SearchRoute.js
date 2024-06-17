import express from "express"
import { SearchCategory,SearchProduct } from "../controllers/SearchController.js";

const router = express.Router();

router.get("/searchbar",SearchCategory)
router.post("/searchproduct",SearchProduct)


export default router;





