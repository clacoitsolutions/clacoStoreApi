import express from "express"; 
import { bannerApiController } from "../controllers/bannerApiController.js";


const router = express.Router();

router.get("/postBanner",bannerApiController)


export default router;