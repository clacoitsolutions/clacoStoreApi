import express from "express"; 
import { trackorder,cancelorder,ReturnOrder,Wishlist } from "../controllers/trackorderController.js";


const router = express.Router();

router.post("/tracking ", trackorder);

router.get("/cancelOrder",cancelorder);

router.get("/ReturnOrder",ReturnOrder);

router.get("/wishlist",Wishlist)

export default router;