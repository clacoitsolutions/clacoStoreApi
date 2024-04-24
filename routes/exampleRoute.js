import express from "express"; 
import { getProductController, createProductController } from "../controllers/exampleController.js";




const router = express.Router();

router.get("/getproduct",getProductController)


router.delete("/createproduct", createProductController)




export default router;