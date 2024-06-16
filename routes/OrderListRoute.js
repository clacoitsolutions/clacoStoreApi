import express from "express";
import { orderlistcontroller,deletecart ,clickorderdetails,CancelOrder} from "../controllers/OrderListController.js";

const router = express.Router();

// Route to get order items
router.post("/getorderitems", orderlistcontroller); // Assuming you want to use POST method

router.delete("/deletecart",deletecart);

router.post("/clickorderdetails",clickorderdetails),

router.post("/Cancelorder",CancelOrder)

export default router;
