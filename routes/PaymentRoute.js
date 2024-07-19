import express from "express"; 
import { BankPayment,BankPAyments,CardApi,ShowCardApi,UPIApi,ShowUPIApi} from "../controllers/PaymentController.js";


const router = express.Router();

router.post("/getbankpayment",BankPayment)
router.post("/getbankpayments",BankPAyments)
router.post("/cardapi",CardApi)
router.post("/showcardapi",ShowCardApi)

router.post("/insertUPI",UPIApi)
router.post("/showUPI",ShowUPIApi)
export default router;