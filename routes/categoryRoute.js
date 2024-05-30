import express from "express"; 
import { getCategory, getcategorycategorywise } from "../controllers/categoryController.js";


const router = express.Router();

router.get("/getCategory",getCategory)
router.get("/getcatwithid",getcategorycategorywise)


export default router;