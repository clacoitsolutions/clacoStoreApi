import express from "express"

import {color,size,LowToHigh,HighToLow} from '../controllers/FillterController.js';

const router = express.Router();


router.post("/color",color)

router.get("/getsize",size)

router.get("/getLowToHigh",LowToHigh)

router.get("/getHighToLow",HighToLow)
export default router;