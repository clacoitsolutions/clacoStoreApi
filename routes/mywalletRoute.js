import express from "express"; 
import { mywallet,postAddCoin,getTotalCoin,sharedCoin,asyncupdatedeliverystatus} from "../controllers/mywalletController.js";


const router = express.Router();

router.post("/MyWallet",mywallet)
router.post("/postAddCoin",postAddCoin)
router.post("/getTotalCoin",getTotalCoin)
router.post("/sharedCoin",sharedCoin)
router.post("/asyncupdatedeliverystatus",asyncupdatedeliverystatus)


export default router;