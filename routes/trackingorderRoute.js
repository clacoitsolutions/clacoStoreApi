import express from "express"; 
import { trackorder,cancelorder,ReturnOrder,Wishlist ,deletewishlist} from "../controllers/trackorderController.js";
0

const router = express.Router();

router.get("/tracking ", trackorder);

router.get("/cancelOrder",cancelorder);

router.get("/ReturnOrder",ReturnOrder);

router.get("/wishlist",Wishlist)

router.delete("/DeleteWishlist",deletewishlist)

export default router;