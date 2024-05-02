import express from "express"; 


<<<<<<< HEAD
import { createregistartionController , logincontroller, forgetpasswordcontroller,addtoCartcontroller} from "../controllers/userController.js";
=======
import { createregistartionController , logincontroller, forgetpasswordcontroller,addtoCartcontroller,ChangePassword} from "../controllers/userController.js";
>>>>>>> c3820e97383466e55d60d031bda15dae62d242b2



const router = express.Router();

router.post("/getregister",createregistartionController)

router.post("/postLogin",logincontroller);

router.post("/forget",forgetpasswordcontroller)

router.post("/addToCart",addtoCartcontroller); 

<<<<<<< HEAD
=======
router.put("/",ChangePassword);

>>>>>>> c3820e97383466e55d60d031bda15dae62d242b2
export default router;