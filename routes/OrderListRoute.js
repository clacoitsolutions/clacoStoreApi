import express from "express";
import { orderlistcontroller,deletecart ,clickorderdetails,CancelOrder,postOnlineOrder} from "../controllers/OrderListController.js";

const router = express.Router();

// Route to get order items
router.post("/getorderitems", orderlistcontroller); // Assuming you want to use POST method

router.delete("/deletecart",deletecart);

router.post("/clickorderdetails",clickorderdetails),

router.post("/Cancelorder",CancelOrder);
router.post("/postOnlineOrder1",postOnlineOrder);
//router.post("/InsertOnlineOrder1",InsertOnlineOrder);

export default router;
