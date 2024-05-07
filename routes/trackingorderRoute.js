import express from "express"; 
import { trackorder,cancelorder,ReturnOrder } from "../controllers/trackorderController.js";


const router = express.Router();

router.post("/tracking ", trackorder);

router.get("/cancelOrder",cancelorder);

router.get("/ReturnOrder",ReturnOrder);

export default router;