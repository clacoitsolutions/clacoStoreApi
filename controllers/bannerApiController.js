export const bannerApiController = async (req, res) => {
    try {
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();
        
        const result = await request.query('SELECT * FROM tbl_TopSliderBanner');
        const returned = result.recordset;
        // Filter out records with null values
        res.status(201).json({message:'Data Inserted Successfully',data:returned});
     
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

