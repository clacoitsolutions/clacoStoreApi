import express from "express"; 


import { createregistartionController ,ramujanam,DisplayAddress,quantity,ContactUsss,deleteaddtocart, logincontroller, forgetpasswordcontroller,getOrderConfirmDetails,addtoCartcontroller,Viewbilldetails,ChangePassword,loginotpcontroller,MyProfile,MyProfiles, Address } from "../controllers/userController.js";
 


const router = express.Router();

router.post("/getregister",createregistartionController)
 

router.post("/postLogin",logincontroller);
 
router.post("/forget",forgetpasswordcontroller)

router.post("/addToCart",addtoCartcontroller); 

router.post("/InsertAddress",Address)

router.post("/displayAddress",DisplayAddress)

router.delete("/deletecart",deleteaddtocart); 


router.put("/changepassword",ChangePassword)

router.post("/otplogin",loginotpcontroller)

router.get("/myProfile",MyProfile)

router.put("/myProfiles",MyProfiles) 

router.get("/Viewbilldetails",Viewbilldetails)

router.get("/getOrderConfirm",getOrderConfirmDetails)

router.post("/ContactUs",ramujanam)

router.post("/quantityprice",quantity)


router.get("/ContactUsss",ContactUsss)

export default router;