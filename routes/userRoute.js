import express from "express"; 


import { createregistartionController , logincontroller, forgetpasswordcontroller,addtoCartcontroller} from "../controllers/userController.js";



const router = express.Router();

router.post("/getregister",createregistartionController)

router.post("/postLogin",logincontroller);

router.post("/forget",forgetpasswordcontroller)

router.post("/addToCart",addtoCartcontroller); 

export default router;