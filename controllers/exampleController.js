export const getProductController = async (req, res) => {
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


export const createProductController = async (req, res) => {
    try {
        const { ProductCategory, ParrentCategoryId, CategoryImage, IsActive, EntryDate, EntryBy } = req.body;
       
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();



        await request.query(`
        INSERT INTO tbl_MainCategory (ProductCategory, ParrentCategoryId, CategoryImage, IsActive, EntryDate, EntryBy)
        VALUES ('${ProductCategory}', '${ParrentCategoryId}', '${CategoryImage}', '${IsActive}', '${EntryDate}', '${EntryBy}')
    `);

        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}