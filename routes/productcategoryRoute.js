import express from "express"; 
import { productCategory ,cancelproduct,Pincode, checkoutsAccount,getProductDetailsprice,getProductDetails} from "../controllers/productCategoryController.js";


const router = express.Router();

router.get("/productCategory",productCategory)
router.get("/cancelproducts",cancelproduct)
router.get("/Pincode",Pincode)

 

router.get("/Checkoutss",checkoutsAccount)
router.get("/getProductDetails",getProductDetails)
router.get("/getProductDetailsprice",getProductDetailsprice)

export default router;