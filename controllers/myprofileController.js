export const myprofile = async (req,res)=>{

    try{
        const{ CustomerId}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('CustomerId',CustomerId);
        request.input('Action',1);

        const result = await request.execute('proc_BindCustomerDashBoard');


        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// THIS API IS USED FOR UPDATE ALL DATA FOR TOGETHER

export const myprofile1 = async (req,res)=>{

    try{
        const{ CustomerId,first,MobileNo,Email,last}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('CustomerId',CustomerId);
       
        
        request.input('Email',Email);
        request.input('MobileNo',MobileNo);
        request.input('first',first);
        request.input('last',last);
        request.input('Action',901);

        const result = await request.execute('proc_BindCustomerDashBoard');


        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// THIS IS USE FOR NAME UPDATE FOR CONCAT FIRST AND LAST
export const NameUpdate = async (req,res)=>{

    try{
        const{ CustomerId,first,last}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('CustomerId',CustomerId);
       
        request.input('first',first);
        request.input('last',last);
        request.input('Action',902);

        const result = await request.execute('proc_BindCustomerDashBoard');


        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// This API IS USED FOR EMAIL UPDATE IN PROFILE

export const EmailUpdate = async (req,res)=>{

    try{

        const{ CustomerId,Email}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('CustomerId',CustomerId);
       
        //request.input('first',first);
        request.input('Email',Email);
        request.input('Action',903);

        const result = await request.execute('proc_BindCustomerDashBoard');


        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
 

// This code is used for update mobile number in profile

export const mobileNnumberUpdate = async (req,res)=>{

    try{
        const{ CustomerId,MobileNo}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('CustomerId',CustomerId);
       
        //request.input('first',first);
        request.input('MobileNo',MobileNo);
        request.input('Action',904);

        const result = await request.execute('proc_BindCustomerDashBoard');


        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// this code is used for update profile pic

export const profilepic = async (req,res)=>{

    try{
        const{ CustomerId,profilepic}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

         
        request.input('CustomerId',CustomerId);
       
        //request.input('first',first);
        request.input('profilepic',profilepic);
        request.input('Action',905);

        const result = await request.execute('proc_BindCustomerDashBoard');


        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

    }

    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
 