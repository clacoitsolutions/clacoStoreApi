import express from "express"; 


import {updatecartsizeagync,customermaster,Getreview,mobilenodetails,offermaster,getrating,getSize,cartlist1,createregistartionController ,ramujanam,DisplayAddress,quantity,ContactUsss,deleteaddtocart, logincontroller, forgetpasswordcontroller,getOrderConfirmDetails,addtoCartcontroller,Viewbilldetails,ChangePassword,loginotpcontroller,MyProfile,MyProfiles, Address } from "../controllers/userController.js";
 


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

router.post("/getOrderConfirm",getOrderConfirmDetails)

router.post("/ContactUs",ramujanam)

router.post("/quantityprice",quantity)


router.get("/ContactUsss",ContactUsss)
router.post("/addtocart3",cartlist1)
router.post("/getSize",getSize)
router.post("/getrating",getrating)
router.post("/offermaster",offermaster)
router.post("/customermaster",customermaster)
router.post("/updatecartsize1",updatecartsizeagync)


router.post("/Mobilealldetails",mobilenodetails)

router.post("/getreview",Getreview)



export default router;