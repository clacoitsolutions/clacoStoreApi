import express from "express"
import { SearchCategory } from "../controllers/SearchController.js";

const router = express.Router();

router.get("/searchbar",SearchCategory)


export default router;





