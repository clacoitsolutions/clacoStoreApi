import sql from 'mssql';

export const getAssignCoupan = async (req, res) => {
    try {
        const { CustomerId } = req.body;

        const pool = req.pool; // Assuming you have a pool configured in req
        await pool.connect();
        const request = pool.request();

       // Input parameters for the stored procedure
        request.input('Action', sql.VarChar(10), '4'); // Ensure 'Action' is a string '4'
        request.input('CustomerId', sql.VarChar(50), CustomerId);

        // Execute the stored procedure
        const result = await request.execute('[a18dfc62d].[Proc_InsertCoupanMaster]');

        res.status(201).json({ message: 'Coupon inserted successfully', data: result.recordset });
    } catch (err) {
        console.error('Error inserting coupon:', err);
        res.status(500).json({ error: 'An error occurred while inserting the coupon' });
    }
};




//Get Coupan
export const getCouponByCode = async (req, res) => {
    try {
        const { CoupanCode } = req.body;

        const pool = req.pool; // Assuming you have a pool configured in req
        await pool.connect();
        const request = pool.request();

        // Input parameters for the stored procedure
        request.input('Action', sql.Int, 5);
        request.input('CoupanCode', sql.VarChar(50), CoupanCode);

        // Execute the stored procedure
        const result = await request.execute('[a18dfc62d].[Proc_InsertCoupanMaster]');

        if (result.recordset.length > 0) {
            res.status(200).json({ message: 'Coupon retrieved successfully', data: result.recordset[0] });
        } else {
            res.status(404).json({ message: 'Coupon not found' });
        }
    } catch (err) {
        console.error('Error retrieving coupon:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the coupon' });
    }
};


//Redem Coupan

export const redeemCoupon = async (req, res) => {
    try {
        const { CoupanCode } = req.body;

        const pool = req.pool; // Assuming you have a pool configured in req
        await pool.connect();
        const request = pool.request();

        // Input parameters for the stored procedure
        request.input('Action', sql.Int, 6);  // Action 3 for updating IsActive to false
        request.input('CoupanCode', sql.VarChar(50), CoupanCode);

        // Execute the stored procedure
        await request.execute('[a18dfc62d].[Proc_InsertCoupanMaster]');

        res.status(200).json({ message: 'Coupon redeemed successfully' });
    } catch (err) {
        console.error('Error redeeming coupon:', err);
        res.status(500).json({ error: 'An error occurred while redeeming the coupon' });
    }
};
