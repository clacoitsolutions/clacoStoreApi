import express from 'express';
import { getAssignCoupan, getCouponByCode , redeemCoupon } from '../controllers/CouponController.js';

const router = express.Router();

router.post('/assigncoupan', getAssignCoupan);
router.post('/get-coupon', getCouponByCode);
router.post('/redeem-coupon', redeemCoupon);

export default router;

