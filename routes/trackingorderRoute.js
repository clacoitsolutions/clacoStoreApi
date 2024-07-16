import express from "express"; 
import {trackorderdate,Bindmainmenuu,AddWishlist,trackorder,cancelorder,ReturnOrder,Wishlist ,deletewishlist} from "../controllers/trackorderController.js";

const router = express.Router();

router.post("/tracking",trackorder);

router.post("/cancelOrder",cancelorder);

router.post("/ReturnOrder",ReturnOrder);

router.post("/wishlist",Wishlist)

router.delete("/DeleteWishlist",deletewishlist)

router.post("/AddWishlist1",AddWishlist)

router.get("/Bindmain",Bindmainmenuu)
router.post("/trackorderdate",trackorderdate)

export default router;