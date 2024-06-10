import express from "express"; 
import { productCategory ,cancelproduct,Pincode, checkoutsAccount,getProductDetailsprice,getProductDetails} from "../controllers/productCategoryController.js";


const router = express.Router();

router.get("/productCategory",productCategory)
router.get("/cancelproducts",cancelproduct)
router.get("/Pincode",Pincode)

 

router.post("/Checkoutss",checkoutsAccount)
router.post("/getProductDetails",getProductDetails)
router.get("/getProductDetailsprice",getProductDetailsprice)

export default router;