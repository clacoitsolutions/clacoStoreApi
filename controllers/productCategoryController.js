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

        res.status(200).json({messag:'i love u'})
    }
    catch(error){
        console.error('sql server',error);
        res.status(502).json({error:'i hate u'});
    }
   }



   export const CheckOut = async (req,res) =>{

    try{

        const { CustomerId,GrossPayable,deliverycharges,iscoupenapplied,CoupenAmout,DisAmt,DeliveryTo,Paymode,status,NetTotal,Stockisted } =req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('CustomerId',CustomerId)
        request.input('grossamount',GrossPayable)
        request.input('deliverycharges',deliverycharges)
        request.input('iscoupenapplied',iscoupenapplied)
        request.input('coupenamount',CoupenAmout)
        request.input('discountamount',DisAmt)
        request.input('deliveryaddressid',DeliveryTo)
        request.input('paymentmode',Paymode)
        request.input('paymentstatus',status)
        request.input('NetPayable',NetTotal)
        request.input('StockiestId',Stockisted)
         

        const result = await request.execute('Proc_InsertOnlineOrder');

        const returnedData = result.recordset;

        res.status(200).json({messag:'Inserted Successfully',data:returnedData})


    }

    catch(error){
        console.error('sql server',error)
        res.status(500).json({error:'Internal Server Error'})
    }
 
   };
    
   
   















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
  