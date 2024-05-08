import express from "express"

import {color} from '../controllers/FillterController.js';

const router = express.Router();


router.post("/color",color)


export default router;