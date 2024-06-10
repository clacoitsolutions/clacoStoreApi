import express from "express";
import { Adreesscontroller } from "../controllers/DeliveryAddressController.js";

const router = express.Router();

// Route to get delivery addresses
router.post("/getdeliveryaddress", Adreesscontroller);

export default router;
