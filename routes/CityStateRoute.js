  
import express from "express";
import { getCity , getState } from "../controllers/CityStateController.js";

const router = express.Router();

// Route to get cities by state ID
router.get("/getCity", getCity);
router.get("/getState", getState);

export default router;

