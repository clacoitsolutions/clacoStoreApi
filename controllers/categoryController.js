export const getCategory = async (req, res) => {
    try {
       
 

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


        const result = await request.query('select * from tbl_MainCategory where ParrentCategoryId=0');

        // console.log(result.recordset);
        res.json(result.recordset);
    }   catch (err) {
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getcategorycategorywise = async (req, res) => {
    try {
        const { MainCategoryCode } = req.body;

        // Check if MainCategoryCode is provided
        if (!MainCategoryCode) {
            return res.status(400).json({ error: 'MainCategoryCode is required in the request body' });
        }

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Provide the input parameters for the stored procedure
        request.input('Catid', MainCategoryCode);
        request.input('Action', 21);

        // Execute the stored procedure
        const result = await request.execute('proc_GetSingleProductView');

        // Check if the stored procedure returned data
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'No data found for the provided MainCategoryCode' });
        }

        // Send the retrieved data as a response
        res.status(200).json({ data: result.recordset });

    } catch (err) {
        // Handle errors
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

 // New code for bind Main menu Section
// export const Bindmainmenu =async (req,res)=>{

//     try{

//         const {Action }= req.body;

//         const pool = req.pool;
//         await pool.connect();
//         const request= pool.request();


//        // request.input("VariationId",VariationId);
//        // request.input("ProductId",ProductId);
        
        
//         request.input("Action",11);

//         const result = await request.execute('proc_BindCustomerDashBoard');

//         const returnedData = result.recordset;

//         res.status(200).json({message:" Bind Menu Successfully",data:returnedData})
//     }
//     catch(error){
//         console.error('sql server:',error)
//         res.status(500).json({error:'Internal Server error'});
//     }
// }


export const HomeProductPage = async (req, res) => {
    try {
       
  
      // Assuming you have configured your database connection pool
      const pool = req.pool;
      await pool.connect();
      const request = pool.request();
  
   
      const result = await request.query("SELECT * FROM tbl_Homepageproducts WHERE Isactive = 1 ORDER BY Indexing DESC");

  
      const cities = result.recordset;
  
      res.status(200).json({ cities });
  
    } 
    catch (error) {
  
      console.error("SQL error", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  