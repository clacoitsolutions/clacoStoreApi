export const color = async (req, res) => {
    try {
        const { ColorName, ColorValue, ProductId } = req.body;

        // Assuming req.pool is the SQL Server connection pool
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Assuming Id, ColorName, ColorValue, and ProductId are properties in req.body

        const query = `
            INSERT INTO mst_Color (ColorName, ColorValue, ProductId)
            VALUES (@ColorName, @ColorValue, @ProductId)
        `;

        request.input('ColorName', ColorName);
        request.input('ColorValue', ColorValue);
        request.input('ProductId', ProductId);

        // Execute the insert query
        await request.query(query);

        res.status(201).json({ message: 'Data Inserted Successfully' });
    } catch (error) {
        console.error('SQL Server error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

