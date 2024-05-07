import express from "express"; 
import { productCategory ,cancelproduct,Pincode,CheckOut} from "../controllers/productCategoryController.js";


const router = express.Router();

router.post("/productCategory",productCategory)
router.get("/cancelproducts",cancelproduct)
router.get("/Pincode",Pincode)

router.post("/Checkouts",CheckOut)

export default router;