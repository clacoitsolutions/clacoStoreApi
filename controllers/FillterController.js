export const color = async (req, res) => {
    try {
        const { Id } = req.body;

        // Assuming req.pool is the SQL Server connection pool
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Assuming Id is the ID you want to use to fetch data from the database
        const query = `
            SELECT *
            FROM mst_Color
            WHERE Id = @Id
        `;
      
        request.input('Id', Id);

        // Execute the query
        const result = await request.query(query);

        // Process the result if needed

        res.status(201).json({ message: 'Data Fetched Successfully', data: result.recordset });
    } catch (error) {
        console.error('SQL Server error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



export const size = async (req, res) => {
    try {
        const { Id } = req.body;

        // Assuming req.pool is the SQL Server connection pool
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Assuming Id is the ID you want to use to fetch data from the database
        const query = `
            SELECT *
            FROM tbl_OnlineOrderDetail
            WHERE Id = @Id
        `;
      
        request.input('Id', Id);

        // Execute the query
        const result = await request.query(query);

        // Process the result if needed

        res.status(201).json({ message: 'Data Fetched Successfully', data: result.recordset });
    } catch (error) {
        console.error('SQL Server error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const LowToHigh = async (req, res) => {
    try {
        const { ProductId } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('ProductId', ProductId);
        request.input('Action', 8);

        // store procedure to call
        const result = await request.execute('proc_GetSingleProductView');
        let returnedData = result.recordset;

        //  
        returnedData.sort((a, b) => a.Price - b.Price);

         
        const filteredData = returnedData.filter(item => item.ProductCode === ProductCode);

        res.status(200).json({ message: " datan Inserted Successfully", data: filteredData });
    } catch (error) {
        console.error('SQL server error:', error);
        res.status(500).json({ message: 'Internal Serever Erorr' });
    }
};
 
export const HighToLow = async (req, res) => {
    try {
        const { CategoryId } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('CatId', CategoryId);
        request.input('Action', 8);

        // store procedure to call
        const result = await request.execute('proc_GetSingleProductView');
        let returnedData = result.recordset;

        //  
        returnedData.sort((a, b) => b.Price - a.Price);

         
        const filteredData = returnedData.filter(item => item.CategoryId === CategoryId);

        res.status(200).json({ message: " datan Inserted Successfully", data: filteredData });
    } catch (error) {
        console.error('SQL server error:', error);
        res.status(500).json({ message: 'Internal Serever Erorr' });
    }
};


