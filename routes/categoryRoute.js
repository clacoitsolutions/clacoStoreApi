import express from "express"; 
import { Bindmainmenu,getCategory, getcategorycategorywise } from "../controllers/categoryController.js";


const router = express.Router();

router.get("/getCategory",getCategory)
router.post("/getcatwithid",getcategorycategorywise),
//router.get("/Bindmainmenu1",Bindmainmenu)


export default router;