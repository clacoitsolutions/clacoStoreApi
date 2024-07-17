export const trackorder =async (req,res)=>{

    try{

        const {OrderId }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();


        request.input("OrderId",OrderId);
        
        
        request.input("Action",10);

        const result = await request.execute('Proc_OrderTracking');

        const returnedData = result.recordset;

        res.status(200).json({message:"Whishlist Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}


export const cancelorder = async (req,res) =>{
  
    try {
        const{OrderId}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input("OrderId",OrderId);
         
        request.input("Action",26)

        const result  = await request.execute('proc_CancelOrder');
        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error);
        res.status(500).json({error:'Internal Server Error'});
    }
};
 
export const insertcancelorder = async (req,res) =>{
  
    try {
        const{OrderId,DeliveryStatus,CancelReason,OrderStatus,CancelDate}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input("OrderId",OrderId);
         
        request.input("DeliveryStatus",DeliveryStatus);
        request.input("CancelReason",CancelReason);
        request.input("OrderStatus",OrderStatus);
        request.input("CancelDate",CancelDate);
        
        request.input("Action",25)

        const result  = await request.execute('proc_CancelOrder');
        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error);
        res.status(500).json({error:'Internal Server Error'});
    }
};


export const ReturnOrder = async (req,res) =>{
  
    try {
        const{OrderId,ReturnReason}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input("OrderId",OrderId);
        request.input("ReturnReason",ReturnReason);
        request.input("Action",3)

        const result  = await request.execute('proc_CancelOrder');
        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error);
        res.status(500).json({error:'Internal Server Error'});
    }
};



export const Wishlist =async (req,res)=>{

    try{

        const {CustomerId }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();


        request.input("CustomerId",CustomerId);
        
        
        request.input("Action",81);

        const result = await request.execute('proc_BindCustomerDashBoard');

        const returnedData = result.recordset;

        res.status(200).json({message:"Whishlist Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}



export const deletewishlist =async (req,res)=>{

    try{

        const {ProductId ,EntryBy}= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();


        request.input("ProductId",ProductId);
        request.input("CustomerId",EntryBy);
        
        request.input("Action",722);

        const result = await request.execute('proc_BindCustomerDashBoard');

        const returnedData = result.recordset;

        res.status(200).json({message:"delete  Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}

export const AddWishlist =async (req,res)=>{

    try{

        const {VariationId,ProductId }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();


        request.input("VariationId",VariationId);
        request.input("ProductId",ProductId);
        
        
        request.input("Action",722);

        const result = await request.execute('Proc_GetProductDetail_Updated');

        const returnedData = result.recordset;

        res.status(200).json({message:" Add Whishlist Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}




// new code for the bind main menu

export const Bindmainmenuu =async (req,res)=>{

    try{

      //  const {Action }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();


       // request.input("VariationId",VariationId);
       // request.input("ProductId",ProductId);
        
        
        request.input("Action",1);

        const result = await request.execute('[Proc_BindMenu]');

        const returnedData = result.recordset;

        res.status(200).json({message:" Add Whishlist Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}
 

export const trackorderdate =async (req,res)=>{

    try{

        const {Orderid,CustomerId }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();

            
        request.input("Action",2);
        request.input("Orderid",Orderid);
        request.input("CustomerId",CustomerId);
         
        const result = await request.execute('proc_BindCustomerDashBoard');

        const returnedData = result.recordset;

        res.status(200).json({message:" Your Data Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
}  

export const TotalReview =async (req,res)=>{

    try{

        const {ProductId}= req.body;

        const pool = req.pool;
        await pool.connect();
        const request= pool.request();

            
        request.input("Action",153);
        request.input("ProductCode",ProductId);
        
         
        const result = await request.execute('proc_GetSingleProductView');

        const returnedData = result.recordset;

        res.status(200).json({message:" Your Data Successfully",data:returnedData})
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({error:'Internal Server error'});
    }
} 