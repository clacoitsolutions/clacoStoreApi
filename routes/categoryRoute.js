import express from "express"; 
import { getCategory, getcategorycategorywise,HomeProductPage} from "../controllers/categoryController.js";


const router = express.Router();

router.get("/getCategory",getCategory)

router.post("/getcatwithid",getcategorycategorywise)

router.get("/getcatgorytop",HomeProductPage)

export default router;