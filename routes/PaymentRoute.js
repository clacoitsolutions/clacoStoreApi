import express from "express"; 
import { BankPayment,BankPAyments,CardApi,ShowCardApi,UPIApi,ShowUPIApi,ClickBankPayment,ClickCardApi,CLICKkUPIAPI} from "../controllers/PaymentController.js";


const router = express.Router();

router.post("/getbankpayment",BankPayment)
router.post("/getbankpayments",BankPAyments)
router.post("/cardapi",CardApi)
router.post("/showcardapi",ShowCardApi)

router.post("/insertUPI",UPIApi)
router.post("/showUPI",ShowUPIApi)
router.put("/clickbankpayment",ClickBankPayment)
router.put("/clickcardpayment",ClickCardApi)
router.put("/CLICKkUPIAPI",CLICKkUPIAPI)
export default router;