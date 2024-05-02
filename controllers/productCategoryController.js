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
  