import express from "express"; 


import { createregistartionController , logincontroller, forgetpasswordcontroller,addtoCartcontroller,ChangePassword,loginotpcontroller,MyProfile,MyProfiles } from "../controllers/userController.js";
 


const router = express.Router();

router.post("/getregister",createregistartionController)
 

router.post("/postLogin",logincontroller);

router.post("/forget",forgetpasswordcontroller)

router.post("/addToCart",addtoCartcontroller); 

router.put("/changepassword",ChangePassword)

router.post("/otplogin",loginotpcontroller)

router.get("/myProfile",MyProfile)

router.put("/myProfiles",MyProfiles) 

export default router;