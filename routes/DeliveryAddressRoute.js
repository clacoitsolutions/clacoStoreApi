import express from "express";
import {choosedefaultdeliveryaddress,Adreesscontroller,ChangeDeliveryCurrentstatus } from "../controllers/DeliveryAddressController.js";

const router = express.Router();

// Route to get delivery addresses
router.post("/getdeliveryaddress", Adreesscontroller);
router.post("/ChangeDeliveryCurrentstatus1", ChangeDeliveryCurrentstatus);
router.post("/defaultaddress", choosedefaultdeliveryaddress);


export default router;
