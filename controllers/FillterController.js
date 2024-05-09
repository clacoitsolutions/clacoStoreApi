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



export const size = async (req, res) => {
    try {
        const { Size_Name, Size_Value, ProductId } = req.body;

        // Assuming req.pool is the SQL Server connection pool
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Assuming SizeName, SizeValue, and ProductId are properties in req.body

        const query = `
            INSERT INTO mst_Size (Size_Name, Size_Value, ProductId)
            VALUES (@Size_Name, @Size_Value, @ProductId)
        `;

        request.input('Size_Name', Size_Name);
        request.input('Size_Value', Size_Value);
        request.input('ProductId', ProductId);

        // Execute the insert query
        await request.query(query);

        res.status(201).json({ message: 'Data Inserted Successfully' });
    } catch (error) {
        console.error('SQL Server error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const LowToHigh = async (req, res) => {
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
        returnedData.sort((a, b) => a.Price - b.Price);

         
        const filteredData = returnedData.filter(item => item.CategoryId === CategoryId);

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


