export const productCategory = async (req, res) => {
       try {
           const { ProductCode, CatId, varId } = req.body;
   
           // Check if required properties are missing
           if (!ProductCode || !CatId || !varId) {
               return res.status(400).json({ error: 'Missing required parameters in request body' });
           }
   
           const pool = req.pool;
           await pool.connect();
           const request = pool.request();
   
           request.input('ProductCode', ProductCode);
           request.input('CatId', CatId);
           request.input('varId', varId);
           request.input('Action', 1);
   
           const result = await request.execute('proc_GetSingleProductView');
   
           const returnedData = result.recordset;
   
           res.status(201).json({ message: 'Data inserted successfully', data: returnedData });
       } catch (err) {
           console.error('SQL error:', err);
           res.status(500).json({ error: 'Internal Server Error' });
       }
   };



   export const cancelproduct = async (req,res) => {

    try{

        const { ProductCode, OrderId} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('ProductCode',ProductCode);
        request.input('OrderId',OrderId);
        request.input('Action',1)

        const result = await request.execute('Proc_CancelItemOrder');
        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});


    }
     catch(error){
        console.error('sql server',err);
        res.status(500).json({error:'Internal Server Error'});
     }

   }

   export const Pincode = async (req,res)=>{
    try{
        const{PinCode} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('PinCode',PinCode);
        request.input('Action',3)

        const result = await request.execute('proc_InsertUpdatePinCode');

        const returnedData=result.recordset;

        res.status(200).json({message:'i love u'})
    }
    catch(error){
        console.error('sql server',error);
        res.status(500).json({error:'i hate u'});
    }
   }

 
   export const checkoutsAccount = async (req, res) => {
    try {
        const { ProductCode } = req.body;

        // Assuming req.pool is the SQL Server connection pool
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Assuming Id is the ID you want to use to fetch data from the database
        const query = `
           SELECT top 1
    O.GrossAmount,
    O.DeliveryCharges,
    O.IsCoupenApplied,
    O.CoupenAtAmount,
    O.DeliveryAddressId,
    O.PaymentMmount,
    O.Discounode,
    O.PaymentStatus,
    O.NetPayable,
    O.StockiestId,
    P.ProductName,
    P.ProductMainImageUrl	 
FROM 
    tbl_OnlineOrderDetail AS O
  , 
    tbl_EcommarceProductMaster AS P Where P.ProductCode =@ProductCode
        `;
      
        request.input('ProductCode', ProductCode);

        // Execute the query
        const result = await request.query(query);

        // Process the result if needed

        res.status(201).json({ message: 'Data Fetched Successfully', data: result.recordset });
    } catch (error) {
        console.error('SQL Server error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getTotalNetAmmount = async (req, res) => {
    try {
      const { customerCode } = req.body;
  
      const pool = req.pool;
      await pool.connect();
      const request = pool.request();
  
      // Assuming 'proc_InsertDeliveryAddress' is your stored procedure
      request.input("Action", 26);
      request.input("customercode", customerCode);
  
      const result = await request.execute("proc_getCartDetails");
  
      const addresses = result.recordset;
  
      res.status(200).json({ addresses });
    } catch (error) {
      console.error("SQL error", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };






 


// export const getProductDetailsprice = async (req,res)=>{

//     try{
//         const{Min,Max}=req.body;

//         const pool = req.pool;
//         await pool.connect();
//         const request = pool.request();


//       //  request.input('CatId',CatId);
       
//         request.input('Max',Max);
//         request.input('Min',Min);
//         // request.input('search',search);
        
//         request.input('Action',822);
        

//         const result = await request.execute('proc_GetSingleProductView');

//         const returnedData = result.recordset;

//         res.status(200).json({message:"Your Order List",data:returnedData});


//     }
//     catch(error){
//         console.error("sql server",error);
//         req.status(500).json({error:"Internal Srver Error"});
//     }
// }



export const getProductDetails = async (req,res)=>{

    try{
        const{productId,CatId}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


        request.input('CatId',CatId);
        request.input('productId',productId);
        request.input('Action',1);

        const result = await request.execute('Proc_GetProductDetail_Updated');

        const returnedData = result.recordset;

        res.status(200).json({message:"Your Order List",data:returnedData});


    }
    catch(error){
        console.error("sql server",error);
        req.status(500).json({error:"Internal Srver Error"});
    }
}


  


//  // controllers/productController.js

// // Dummy data for demonstration
// const products = [
//     { productId: 1, productCategory: 'Electronics', title: 'Smartphone', catId: 101, varId: 201 },
//     { productId: 2, productCategory: 'Books', title: 'Node.js Essentials', catId: 102, varId: 202 },
//   ];
  
//   // GET all products
//   const getAllProducts = (req, res) => {
//     res.json(products);
//   };
  
//   // GET product by ID
//   const getProductById = (req, res) => {
//     const productId = parseInt(req.params.productId);
//     const product = products.find(prod => prod.productId === productId);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   };
  
//   // POST a new product
//   const createProduct = (req, res) => {
//     const { productId, productCategory, title, catId, varId } = req.body;
//     const newProduct = { productId, productCategory, title, catId, varId };
//     products.push(newProduct);
//     res.status(201).json(newProduct);
//   };
  
//   module.exports = {
//     getAllProducts,
//     getProductById,
//     createProduct
//   };
