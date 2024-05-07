import express from "express"; 


import { createregistartionController , logincontroller, forgetpasswordcontroller,addtoCartcontroller,ChangePassword,AddReview,Address} from "../controllers/userController.js";



const router = express.Router();

router.post("/getregister",createregistartionController)

router.post("/postLogin",logincontroller);

router.post("/forget",forgetpasswordcontroller)

router.post("/addToCart",addtoCartcontroller); 

router.put("/",ChangePassword);

router.get("/AddReview",AddReview);

router.post("/Address",Address);

export default router;