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


    // Here Start The coin System


        
        export const postAddCoin = async (req, res) => {
            try {
                const { CustomerID,OrderId,Ammount}=req.body;
        
                const pool = req.pool;
                await pool.connect();
                const request = pool.request();
        
                request.input('CustomerID',CustomerID);
                request.input('OrderId',OrderId);
                request.input('Ammount',Ammount);
                request.input('Action',1);
                const result = await request.execute('Proc_InsertUpdateDeleteCoin');
        
                const returnedData = result.recordset;
        
                res.status(200).json({message:"Your Coin Inserted",data:returnedData})
            }
            catch(error){
                console.error('sql server:',error)
                res.status(500).json({error:'Internal Server error'});
            }
        }    

       // Here API Maked for Bind All Available Coin
        export const getTotalCoin = async (req, res) => {
            try {
                const { CustomerID}=req.body;
        
                const pool = req.pool;
                await pool.connect();
                const request = pool.request();
        
                request.input('CustomerID',CustomerID);
              
                request.input('Action',9);
                const result = await request.execute('Proc_InsertUpdateDeleteCoinAPI');
        
                const returnedData = result.recordset;
        
                res.status(200).json({message:"Your Coin Inserted",data:returnedData})
            }
            catch(error){
                console.error('sql server:',error)
                res.status(500).json({error:'Internal Server error'});
            }
        }    
         
   // This Adderss is used for shared coin 

        export const sharedCoin = async (req, res) => {
            try {
                const { CustomerID,ReciverCustomerId,SelectedValue}=req.body;
        
                const pool = req.pool;
                await pool.connect();
                const request = pool.request();
        
                request.input('CustomerID',CustomerID);
                request.input('ReciverCustomerId',ReciverCustomerId);
                request.input('SelectedValue',SelectedValue);
              
                request.input('Action',8);
                const result = await request.execute('Proc_InsertUpdateDeleteCoinAPI');
        
                const returnedData = result.recordset;
        
                res.status(200).json({message:"Your Coin Inserted",data:returnedData})
            }
            catch(error){
                console.error('sql server:',error)
                res.status(500).json({error:'Internal Server error'});
            }
        }    

//  jiska deliverystatus delivered hoga uska updatedstatus 1 ho jaayega isko click even par lagana hoga 
        export const asyncupdatedeliverystatus = async (req, res) => {
            try {
                const { }=req.body;
        
                const pool = req.pool;
                await pool.connect();
                const request = pool.request();
        
             
                request.input('Action',11);
                const result = await request.execute('Proc_InsertUpdateDeleteCoinAPI');
        
                const returnedData = result.recordset;
        
                res.status(200).json({message:"Your Coin Inserted",data:returnedData})
            }
            catch(error){
                console.error('sql server:',error)
                res.status(500).json({error:'Internal Server error'});
            }
        }    

        // This Api is used  for the After 1 year Updatedstatus 0 is Api se 1 year ke baad updatedstatus 0 ho jayega

        export const asyncUpdatedStatusYear = async (req, res) => {
            try {
                const { }=req.body;
        
                const pool = req.pool;
                await pool.connect();
                const request = pool.request();
        
             
                request.input('Action',3);
                const result = await request.execute('Proc_InsertUpdateDeleteCoinAPI');
        
                const returnedData = result.recordset;
        
                res.status(200).json({message:"Your Coin Inserted",data:returnedData})
            }
            catch(error){
                console.error('sql server:',error)
                res.status(500).json({error:'Internal Server error'});
            }
        } 
         



