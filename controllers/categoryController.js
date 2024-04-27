export const getCategory = async (req, res) => {
    try {


        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


        const result = await request.query('SELECT * FROM tbl_MainCategory');

        // console.log(result.recordset);
        res.json(result.recordset);
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
