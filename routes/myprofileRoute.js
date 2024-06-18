import express from "express"

import{myprofile} from '../controllers/myprofileController.js';

const router= express.Router();

router.post("/myProfile",myprofile);
// router.post("/myProfile1",myprofile1);

export default router;
