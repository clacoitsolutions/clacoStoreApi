import express from "express"; 
import {getProductDetailsprice,getTotalNetAmmount,productCategory ,cancelproduct,Pincode, checkoutsAccount,getProductDetails} from "../controllers/productCategoryController.js";

//getProductDetailsprice
const router = express.Router();

router.get("/productCategory",productCategory)
router.get("/cancelproducts",cancelproduct)
router.get("/Pincode",Pincode)

 

router.post("/Checkoutss",checkoutsAccount)
router.post("/getProductDetails",getProductDetails)
router.post("/getTotalNetAmmount",getTotalNetAmmount)
router.post("/getProductDetailsprice",getProductDetailsprice)

export default router;