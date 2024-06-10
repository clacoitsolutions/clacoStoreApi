import express from "express"

import{myprofile} from '../controllers/myprofileController.js';

const router= express.Router();

router.post("/myProfile",myprofile);

export default router;
