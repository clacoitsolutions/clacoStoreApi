import express from "express"; 
import { trackorder,cancelorder,ReturnOrder,Wishlist ,deletewishlist} from "../controllers/trackorderController.js";

const router = express.Router();

router.get("/tracking ", trackorder);

router.get("/cancelOrder",cancelorder);

router.get("/ReturnOrder",ReturnOrder);

router.post("/wishlist",Wishlist)

router.delete("/DeleteWishlist",deletewishlist)

export default router;