import express from "express";
import { orderlistcontroller,deletecart } from "../controllers/OrderListController.js";

const router = express.Router();

// Route to get order items
router.post("/getorderitems", orderlistcontroller); // Assuming you want to use POST method

router.delete("/deletecart",deletecart)

export default router;
