export const bannerApiController = async (req, res) => {
    try {
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        const result = await request.query('SELECT * FROM tbl_TopSliderBanner');

        // Filter out records with null values
        const filteredData = result.recordset.filter(record => {
            // Check if any value in the record is null
            return Object.values(record).every(value => value !== null);
        });

        res.json(filteredData);
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

