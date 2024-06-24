import express from "express"; 
import { mywallet,postAddCoin,getTotalCoin,sharedCoin,asyncupdatedeliverystatus,getSenderCoin,getReciverCustomerDetails} from "../controllers/mywalletController.js";


const router = express.Router();

router.post("/MyWallet",mywallet)
router.post("/postAddCoin",postAddCoin)
router.post("/getTotalCoin",getTotalCoin)
router.post("/sharedCoin",sharedCoin)
router.post("/asyncupdatedeliverystatus",asyncupdatedeliverystatus)
router.post("/getSenderCoin",getSenderCoin)
router.post("/getReciverCustomerDetails",getReciverCustomerDetails)




export default router;