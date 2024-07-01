import express from "express"; 
import {getProductDetailColor,getAllImageProductWise,getProductDetailsprice,getTotalNetAmmount,productCategory ,cancelproduct,Pincode, checkoutsAccount,getProductDetails,getProductDetailSize,getProductDetailColorWise} from "../controllers/productCategoryController.js";

//getProductDetailsprice
const router = express.Router();

router.get("/productCategory",productCategory)
router.get("/cancelproducts",cancelproduct)
router.get("/Pincode",Pincode)

 

router.post("/Checkoutss",checkoutsAccount)
router.post("/getProductDetails",getProductDetails)
router.post("/getTotalNetAmmount",getTotalNetAmmount)
router.post("/getProductDetailsprice",getProductDetailsprice)
router.post("/getProductDetailSize",getProductDetailSize)
router.post("/getProductDetailColorWise",getProductDetailColorWise)
router.post("/getAllImageProductWise",getAllImageProductWise)
router.post("/getProductDetailColor",getProductDetailColor)

export default router;