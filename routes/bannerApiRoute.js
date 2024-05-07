import express from "express"; 
import { bannerApiController } from "../controllers/bannerApiController.js";


const router = express.Router();

router.get("/getBanner",bannerApiController)


export default router;