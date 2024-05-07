export const mywallet = async (req,res) =>
    {
        try{
            const { CustomerID}=req.body;

            const pool= req.pool;
            await pool.connect();
            const request = pool.request();

            request.input('customerID',CustomerID);

            const result = await request.execute('GetBonus');

            const returnedData = result.recordset;
   
           res.status(201).json({ message: 'Data inserted successfully', data: returnedData });
       } catch (err) {
           console.error('SQL error:', err);
           res.status(500).json({ error: 'Internal Server Error' });
       }
         
    }