export const createregistartionController = async (req, res) => {
    try {
        // Destructure data from the request body
        const { Name, MobileNo, ReferCode, Email, Password } = req.body;

        // Get the database pool from the request object
        const pool = req.pool;

        // Connect to the database
        await pool.connect();

        // Create a request object
        const request = pool.request();

        if(!Name || !Email || !Password){
            res.status(400).json({message:'Please field content'})
        }



        // Specify parameters with their values
        request.input('name', Name);
        request.input('mobileno', MobileNo);
        request.input('UsedReferal', ReferCode);
        request.input('EmailId', Email);
        request.input('Password', Password);
        request.input('Action', 1);

        // Call the stored procedure to insert data
        const result = await request.execute('Proc_InserCustomerAccountWeb');
        // If your stored procedure returns data, you can access it from the result object
        const returnedData = result.recordset; // Assuming the returned data is in the form of a recordset

        // Send a success response along with the returned data
        res.status(201).json({ message: 'Data inserted successfully', data: returnedData });

    } catch (err) {
        //         // Handle errors
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



//Login Page Controller--- code by Abhishek Singh
export const logincontroller = async (req, res) => {
    try {
        const { UserName, Password } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('UserName', UserName);
        request.input('Password', Password);
        request.input('Action', 5);

        const result = await request.execute('Proc_GetLoginDetails');

        const returnedData = result.recordset;

        if (returnedData && returnedData.length > 0) {
            const user = returnedData[0];
            if (user.MobileNo == UserName) {
                res.status(200).json({ message: 'Login successful', data: user });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }

    }
    catch (error) {
        console.error('SQL error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const forgetpasswordcontroller = async (req,res) => {
    try{

        const{MobileNo} = req.body;

        const pool = req.pool;

        await pool.connect();
        const request = pool.request();
        request.input('mobile',MobileNo);


        const result = await request.execute('ChangePassword');

        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }
    catch(error){
        console.error('SQL error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const addtoCartcontroller =async (req,res)=>{

    try{

        const {CustomerId }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();


        request.input("CustomerId",CustomerId);
        
        
        request.input("Action",2);

        const result = await request.execute('Proc_GetComboOffer');

        const returnedData = result.recordset;

        res.status(200).json({message:"mycart Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}
export const deleteaddtocart = async (req, res) => {
    try {
        const { CartListID } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('Carlistid', CartListID); // Corrected parameter name
        request.input('Action', 3);

        const result = await request.execute('Proc_GetComboOffer'); // Use the correct stored procedure name

        // Assuming the stored procedure returns some data after deletion
        const returnedData = result.recordset;

        res.status(200).json({ message: "Item deleted successfully", data: returnedData });
    } catch (error) {
        console.error('SQL Server Error:', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
}


export const ChangePassword = async (req, res) => {
    try {
        const { Mobile, oldpassword, newpassword } = req.body;

        // Assuming req.pool is a valid database connection pool
        const pool = req.pool;
        const request = pool.request();
        await pool.connect();
        
        request.input('UserId', Mobile);
        request.input('OldPassword', oldpassword);
        request.input('NewPassword', newpassword);

        const result = await request.execute('Proc_UpdatedChangePassword');

        const returnedData = result.recordset;

        // Check if the stored procedure returned data
        if (returnedData && returnedData.length > 0) {
            // Check if the old password provided matches the stored password
            if (returnedData[0].Success === 1) {
                res.status(200).json({ message: 'Password changed successfully' });

            } 
            else if (returnedData[0].Error)
             {
                // If the stored procedure returned an error message
                res.status(400).json({ message: returnedData[0].Error });

            }
             else 
            {
                // If no success indicator or error message found
                res.status(400).json({ message: 'Failed to change password' });
            }

        } 
        else 
        {
            // If no data returned
            res.status(400).json({ message: 'Failed to change password' });
        }
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
 
}
export const AddReview = async (req,res)=>{
    try{
        const {CustomerId,ProductCode,reviewstatus,image,CustomerName} =req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();

        request.input('CustomerId',CustomerId);
        request.input('ProductCode',ProductCode);
        request.input('reviewstatus',reviewstatus);
        request.input('image',image);
        request.input('CustomerName',CustomerName);


        const result = await request.execute('proc_addReview');

        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const Address = async (req,res)=>{

    try{
        const {CustomerCode, Name,MobileNo,PinCode,Locality,Address,StateId,CityId,Landmark,AlternativeMobileno,OfferType,Latitude,Longitude,address2 }= req.body;

        // if (!Name || !MobileNo || !PinCode || !Locality ||!Address ||!StateId || !CityId || !Landmark || !AlternativeMobileno ||!OfferType ||!Latitude || !Longitude || !address2) {
        //     return res.status(400).json({ error: 'Bad Request: Missing required fields' });
        // }

        const pool= req.pool;
        await pool.connect();

        const request = pool.request();

        request.input('CustomerCode',CustomerCode) 
        request.input('name',Name);
        request.input('mobileno',MobileNo);
        request.input('pincode',PinCode);
        request.input('locality',Locality);
        request.input('address',Address);
        request.input('stateid',StateId);
        request.input('cityname',CityId);
        request.input('landmark',Landmark);
        request.input('altmobileno',AlternativeMobileno);
        request.input('addresstype',OfferType);
        request.input('latitude',Latitude);
        request.input('longitude',Longitude);
        request.input('adress2',address2);
        request.input('Action',5);


        const result = await request.execute('proc_InsertDeliveryAddress');

        const returnedData = result.recordset; // Assuming the returned data is in the form of a recordset

        // Check if any rows were affected by the insert operation
        if (result.rowsAffected && result.rowsAffected[0] > 0) {
            // Send a success response along with the returned data
            res.status(201).json({ message: 'Data inserted successfully', data: returnedData });
        } else {
            // Send a bad request response since no data was inserted
            res.status(400).json({ error: 'Bad Request: No data inserted' });
        }

    } catch (err) {
        // Handle errors
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
 

  export const DisplayAddress = async (req, res) => {
    try {
        const { CustomerCode } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('customercode', CustomerCode); // Corrected parameter name
        request.input('Action', 6);

        const result = await request.execute('proc_InsertDeliveryAddress'); // Use the correct stored procedure name

        // Assuming the stored procedure returns some data after deletion
        const returnedData = result.recordset;

        res.status(200).json({ message: "Item deleted successfully", data: returnedData });
    } catch (error) {
        console.error('SQL Server Error:', error);
        res.status(500).json({ error: 'Internal Server error' });
    }
}








import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase app
// const firebaseConfig = {
//     apiKey: "AIzaSyCz22UHSeOXoKQJVmRUQACJZEoh_guEP-w",
//     authDomain: "clacostore-7303d.firebaseapp.com",
//     projectId: "clacostore-7303d",
//     storageBucket: "clacostore-7303d.appspot.com",
//     messagingSenderId: "811975379858",
//     appId: "1:811975379858:web:eecd652c1f6c7a23c3cf4b",
//     measurementId: "G-JBPM0JKMD9"
//   };
const firebaseConfig = {
    apiKey: "AIzaSyCz22UHSeOXoKQJVmRUQACJZEoh_guE-w",
    authDomain: "clacostore-7303d.firebaseapp.com",
    projectId: "clacostore-7303d",
    storageBucket: "clacostore-7303d.appspot.com",
    messagingSenderId: "811975379858",
    appId: "1:811975379858:web:eecd652c1f6c7a23c3cf4b",
    measurementId: "G-JBPM0JKMD9"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginotpcontroller = async (req, res) => {
    try {
        const { Mobile } = req.body; // Assuming Mobile is the key for mobile number in the request body

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Send OTP to the user's mobile number using Firebase Admin SDK
        const otpSent = await sendOTPviaFirebase(Mobile, otp);

        if (otpSent) {
            // OTP sent successfully, return response to the client
            res.status(200).json({ message: 'OTP sent successfully' });
        } else {
            // Failed to send OTP
            res.status(500).json({ error: 'Failed to send OTP' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Function to send OTP via Firebase Admin SDK
async function sendOTPviaFirebase(mobileNumber, otp) {
    try {
        // Send OTP using Firebase Admin SDK
        await auth.createUser({ phoneNumber: mobileNumber });
        // Assuming user is already created and you want to update their phone number
        await auth.updateUser(mobileNumber, { phoneNumber: mobileNumber });

        // Send SMS with OTP using your preferred SMS service provider
        // For example, you can use Twilio, Nexmo, etc.
        // Code to send SMS goes here

        return true;
    } catch (error) {
        console.error('Error sending OTP:', error);
        return false;
    }
}


export const MyProfile = async (req,res)=>{

    try{

        const {CustomerId }=req.body;

        const pool= req.pool;
        await pool.connect();

        const request = pool.request();

        request.input('CustomerId',CustomerId);
        
        request.input('Action',1);

        const result = await request.execute('proc_BindCustomerDashBoard');

        const returned = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returned});
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const MyProfiles = async (req,res)=>{

     

        try {
            const { Name, Email, MobileNo } = req.body;
            const { CustomerId } = req.params;
    
            console.log('Customer ID:', CustomerId); // Log the CustomerId
            
            // Validate input data
    
            // Update the customer profile
            const pool= req.pool;
            await pool.connect();
    
            const request = pool.request();
    
            request.input('CustomerId', CustomerId);
            request.input('Name', Name);
            request.input('MobileNo', MobileNo);
            request.input('Email', Email);
            request.input('Action', 9); // Assuming 1 is for update action
    
            const result = await request.execute('proc_BindCustomerDashBoard');
            const returned = result.recordset;
    
            res.status(200).json({ message: `Profile Updated Successfully for Customer ID: ${CustomerId}`, data: returned });
        } catch (error) {
            console.error('SQL Server:', error)
            res.status(500).json({ error: 'Internal Server Error' });
    }
}



export const Viewbilldetails = async (req,res)=>{

    try{
        const{OrderID}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


       
        request.input('OrderOd',OrderID);
        request.input('Action',1);

        const result = await request.execute('proc_PrintonlineInvoice');

        const returnedData = result.recordset;

        res.status(200).json({message:"Your Order List",data:returnedData});


    }
    catch(error){
        console.error("sql server",error);
        req.status(500).json({error:"Internal Srver Error"});
    }
}





export const getOrderConfirmDetails = async (req,res)=>{

    try{
        const{OrderID}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


       
        request.input('OrderId',OrderID);
        request.input('Action',1);

        const result = await request.execute('GetOrderConfirmDetails');

        const returnedData = result.recordset;

        res.status(200).json({message:"Your Order List",data:returnedData});


    }

    catch(error){
        console.error("sql server",error);
        req.status(500).json({error:"Internal Srver Error"});
    }
}

export const ramujanam = async (req, res) => {
    try {
        // Check if all required keys are present in the request body
        const { FullNames, MobileNos, EmailAddresss, Messages } = req.body;
        if (!FullNames || !MobileNos || !EmailAddresss || !Messages) {
            return res.status(400).json({ error: 'Bad Request: Missing required fields' });
        }

        // Assuming req.pool is your SQL connection pool
        const pool = req.pool;
        
        // Connect to the pool
        await pool.connect();
        
        // Create a request object
        const request = pool.request();

        // Execute the insert command
        request.input('FullName',FullNames),
        request.input('MobileNo',MobileNos),
        request.input('EmailAddress',EmailAddresss),
        request.input('Message',Messages),
        request.input('Action',1)

        const result = await request.execute('Proc_ContactUs');
        // If your stored procedure returns data, you can access it from the result object
        const returnedData = result.recordset; // Assuming the returned data is in the form of a recordset

        // Check if any rows were affected by the insert operation
        if (result.rowsAffected && result.rowsAffected[0] > 0) {
            // Send a success response along with the returned data
            res.status(201).json({ message: 'Data inserted successfully', data: returnedData });
        } else {
            // Send a bad request response since no data was inserted
            res.status(400).json({ error: 'Bad Request: No data inserted' });
        }

    } catch (err) {
        // Handle errors
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const ContactUsss = async (req,res)=>{

    try{
       
        const pool = req.pool;
        await pool.connect();
        const request = pool.request();
 
 
        const result = await request.query('select * from tbl_ContactUs ');

        const returnedData = result.recordset;

        res.status(200).json({message:"Your Order List",data:returnedData});


    }
    catch(error){
        console.error("sql server",error);
        req.status(500).json({error:"Internal Srver Error"});
    }
}


export const quantity = async (req, res) => {
    try {
        const { Carlistid } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('Carlistid', Carlistid);
         
        request.input('Action', 4);

        const result = await request.execute('Proc_GetComboOffer');

        const returnedData = result.recordset;

        res.status(200).json({message:"mycart delete Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}              
 
// New Code By Abhimanyu Singh
export const cartlist1 = async (req, res) => {
    try {
        const { customerid,productid,quantity,St,sizename,colorname} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('customerid', customerid);
        request.input('productid', productid);
        request.input('quantity', quantity);
        request.input('St', St);
        request.input('sizename', sizename);
        request.input('Colorname', colorname);
        request.input('Action', 1);

        const result = await request.execute('ProcInsertCartList');

        const returnedData = result.recordset;

        res.status(200).json({message:"My cart Insert Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}    


export const updatecartsizeagync = async (req, res) => {
    try {
        const { customerid,productid,quantity} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('customerid', customerid);
        request.input('productid', productid);
        request.input('quantity', quantity);
        request.input('Action', 5);

        const result = await request.execute('ProcInsertCartList');

        const returnedData = result.recordset;

        res.status(200).json({message:"My  cart Insert Successfully",data:returnedData})
    }              
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }           
}    

export const getSize = async (req, res) => {
    try {
        const {sizecode} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('sizecode', sizecode);
  
        request.input('Action',744);

        const result = await request.execute('Proc_GetProductDetail_Updated');

        const returnedData = result.recordset;

        res.status(200).json({message:"This is Your Data Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }        
}               
           
              
export const getrating = async (req, res) => {           
    try {            
        const {rating} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('rating', rating);
  
        request.input('Action',55);

        const result = await request.execute('Proc_GetProductDetail_Updated');

        const returnedData = result.recordset;

        res.status(200).json({message:"This is Your Rating Details",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}    


export const offermaster = async (req, res) => {
    try {
        const {DiscountPercentage} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('DiscountPercentage', DiscountPercentage);
  
        request.input('Action',1);

        const result = await request.execute('ShowProductsByDiscountPercentage');

        const returnedData = result.recordset;

        res.status(200).json({message:"This is Your Products in offer",data:returnedData})
    }           
    catch(error){           
        console.error('sql server:',error)         
        res.status(500).json({error:'Internal Server error'});         
    }           
}             
 
            
export const customermaster = async (req, res) => {            
    try {               
        const {Name,emailid,mobile,Password} = req.body;             
                                              
        const pool = req.pool;          
        await pool.connect();           
        const request = pool.request();             
                                               
        request.input('Name', Name);         
        request.input('emailid',emailid);       
        request.input('mobileno',mobile);         
        request.input('Password',Password);      
                                             
        request.input('Action',1);             
                                  
        const result = await request.execute('Proc_InserCustomerAccountWeb');      

        const returnedData = result.recordset;               
                                               
        res.status(200).json({message:"This is Your Products in offer",data:returnedData})     
    }
    catch(error){     
        console.error('sql server:',error)     
        res.status(500).json({error:'Internal Server error'});      
    }    
}    
 
export const mobilenodetails = async (req, res) => {
    try {
        // Destructure data from the request body
        const { MobileNo } = req.body;

        // Get the database pool from the request object
        const pool = req.pool;

        // Connect to the database
        await pool.connect();

        // Check if the mobile number exists in the database
        const checkIfExistsQuery = `SELECT Name,MobileNo,EmailAddress,CustomerId,ReferCode FROM tbl_CustomerMaster WHERE mobileno = @mobileno`;
        const requestCheck = pool.request();
        requestCheck.input('mobileno', MobileNo);
        const resultCheck = await requestCheck.query(checkIfExistsQuery);
        const customerExists = resultCheck.recordset.length > 0;

        if (!customerExists) {
            // Mobile number does not exist, insert default data using stored procedure
            const insertDefaultQuery = `
                EXEC Proc_InserCustomerAccountWeb
                    @mobileno = @mobileno,
                    @name = 'Default Name',
                    @EmailId = 'default@email.com',
                    
                    @UsedReferal = 'defaultreferalcode',
                    @Action = 102
            `;
            const requestInsert = pool.request();
            requestInsert.input('mobileno', MobileNo);
            const resultInsert = await requestInsert.query(insertDefaultQuery);

            // Send success response with inserted data
            const insertedData = resultInsert.recordset;
            res.status(201).json({ message: 'Data inserted successfully', data: insertedData });
        } else {
            // Mobile number exists, retrieve and return customer details
            const customerDetails = resultCheck.recordset[0];
            res.status(200).json({ message: 'Customer details retrieved successfully', data: customerDetails });
        }

    } catch (err) {
        // Handle errors
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
 
export const Getreview = async (req, res) => {
    try {
        const {CustomerId,ProductCode,reviewstatus,Description,image} = req.body;    

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('CustomerId', CustomerId);
        request.input('ProductCode',ProductCode);
        request.input('reviewstatus',reviewstatus);
        request.input('Description',Description);
  
        request.input('image',image);

        const result = await request.execute('proc_addReview');

        const returnedData = result.recordset;

        res.status(200).json({message:"Review Inserted Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}  
 

// export const DeliveryOrderDetails = async (req, res) => {
 
//     try {
//         const { CustomerId } = req.body;

     
       
//         requestSP.input('CustomerId', CustomerId);
//         requestSP.input('Action', 10);
//         await requestSP.execute('Proc_InsertUpdateOrderstatus');

//         // Fetch data from tbl_Ecommarceproductmaster using the temporary table #ItemCodes
//         const query = `
//             SELECT p.*
//             FROM tbl_Ecommarceproductmaster p
//             INNER JOIN #ItemCodes i ON p.ProductCode = i.ItemCode;
//         `;

//         const requestQuery = pool.request();
//         const result = await requestQuery.query(query);

//         // Extract the fetched data
//         const productData = result.recordset;

//         // Send response back to client
//         res.status(200).json({ message: "Product Data Retrieved Successfully", data: productData });
//     } catch (error) {
//         console.error('SQL Server Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     } finally {
//         try {
//             // Clean up: Drop temporary tables if needed
//             const cleanupQuery = `
//                 IF OBJECT_ID('tempdb..#ItemCodes') IS NOT NULL
//                     DROP TABLE #ItemCodes;
//             `;
//             const requestCleanup = pool.request();
//             await requestCleanup.query(cleanupQuery);

//             // Close SQL connection
//             if (pool) await pool.close();
//         } catch (err) {
//             console.error('Error closing SQL connection:', err);
//         }
//     }

// export const DeliveryOrderDetails = async (req, res) => {
//     try {
//         const { CustomerId } = req.body;

//         const pool = req.pool;
//         await pool.connect();
//         const request = pool.request();
//         // Execute stored procedure with inputs
//         const result = await request
//             .input('CustomerId', CustomerId)
//             .input('Action', 10)
//             .execute('Proc_InsertUpdateOrderstatus');

//         // SQL query to create and fetch data from temporary tables
//         const productQuery = `
//             -- Step 1: Select order details for the specified customer
//             SELECT *
//             INTO #OrderDetailss
//             FROM tbl_OnlineOrderDetail
//             WHERE customerid ='CUST000385';

//             -- Step 2: Retrieve order IDs with a delivered status
//             SELECT OrderID
//             INTO #DeliveredOrderss
//             FROM tbl_OnlineOrderDetail
//             WHERE customerid = 'CUST000385' AND Deliverystatus = 'delivered';

//             -- Step 3: Fetch item codes using the retrieved order IDs
//             SELECT ItemCode
//             INTO #ItemCodes
//             FROM tbl_onlineorderitemdetail
//             WHERE OrderID IN (SELECT OrderID FROM #DeliveredOrderss);

//             -- Step 4: Find product names using the item codes
//             SELECT p.*
//             FROM tbl_Ecommarceproductmaster p
//             INNER JOIN #ItemCodes i ON p.ProductCode = i.ItemCode;

//             -- Clean up temporary tables
//             DROP TABLE #OrderDetailss;
//             DROP TABLE #DeliveredOrderss;
//             DROP TABLE #ItemCodes;
//         `;

//         // Execute the entire productQuery as a single batch
//         const productResult = await request.query(productQuery);

//         const returnedData = productResult.recordset;

//         res.status(200).json({ message: "Products fetched successfully", data: returnedData });
//     } catch (error) {
//         console.error('SQL Server Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };



export const DeliveryOrderDetails = async (req, res) => {
    try {
        const { CustomerId } = req.body;

        if (!CustomerId) {
            return res.status(400).json({ error: 'Customer ID is required' });
        }

        const pool = req.pool;
        const request = pool.request();
        await pool.connect();

        // Step 1: Create #OrderDetailss temporary table and insert data
        await request.query(`
            SELECT *
            INTO #OrderDetailss
            FROM tbl_OnlineOrderDetail
            WHERE customerid = @CustomerId;
        `, [{
            name: 'CustomerId',
            type: 'Int',
            value: CustomerId
        }]);

        // Step 2: Create #DeliveredOrderss temporary table and insert data
        await request.query(`
            SELECT OrderID
            INTO #DeliveredOrderss
            FROM tbl_OnlineOrderDetail
            WHERE customerid = @CustomerId AND Deliverystatus = 'delivered';
        `, [{
            name: 'CustomerId',
            type: 'Int',
            value: CustomerId
        }]);

        // Step 3: Create #ItemCodes temporary table and insert data
        await request.query(`
            SELECT ItemCode
            INTO #ItemCodes
            FROM tbl_onlineorderitemdetail
            WHERE OrderID IN (SELECT OrderID FROM #DeliveredOrderss);
        `);

        // Retrieve product details using the temporary tables
        const result = await request.query(`
            SELECT p.*
            FROM tbl_Ecommarceproductmaster p
            INNER JOIN #ItemCodes i ON p.ProductCode = i.ItemCode;
        `);

        // Clean up temporary tables
        await request.query('DROP TABLE #OrderDetailss;');
        await request.query('DROP TABLE #DeliveredOrderss;');
        await request.query('DROP TABLE #ItemCodes;');

        const returnedData = result.recordset;

        res.status(200).json({ message: "Products fetched successfully", data: returnedData });
    } catch (error) {
        console.error('SQL Server Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }  
};


