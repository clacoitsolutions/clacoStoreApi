import express from "express"; 
import { trackorder,cancelorder,ReturnOrder,Wishlist ,deletewishlist} from "../controllers/trackorderController.js";

const router = express.Router();

router.post("/tracking ", trackorder);

router.post("/cancelOrder",cancelorder);

router.post("/ReturnOrder",ReturnOrder);

router.post("/wishlist",Wishlist)

router.delete("/DeleteWishlist",deletewishlist)

export default router;