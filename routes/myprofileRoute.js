import express from "express"

import{myprofile,myprofile1,NameUpdate,EmailUpdate,mobileNnumberUpdate,profilepic} from '../controllers/myprofileController.js';

const router= express.Router();

router.post("/myProfile",myprofile);
router.post("/myProfile2",myprofile1);
router.post("/NameUpdate1",NameUpdate);
router.post("/EmailUpdate1",EmailUpdate);
router.post("/mobileNnumberUpdate1",mobileNnumberUpdate);
router.post("/profilepic1",profilepic);
export default router;
