import express from "express";
import { Adreesscontroller } from "../controllers/DeliveryAddressController.js";

const router = express.Router();

// Route to get delivery addresses
router.get("/getdeliveryaddress", Adreesscontroller);

export default router;
