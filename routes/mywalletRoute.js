import express from "express"; 
import { mywallet } from "../controllers/mywalletController.js";


const router = express.Router();

router.post("/MyWallet",mywallet)


export default router;