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


// export const myprofile1 = async (req,res)=>{

//     try{
//         const{ CustomerId}=req.body;

//         const pool = req.pool;
//         await pool.connect();
//         const request = pool.request();

         
//         request.input('CustomerId',CustomerId);
//         request.input('first',first);
//         request.input('Last',Last);
//         request.input('Email',Email);
//         request.input('MobileNo',MobileNo);
//         request.input('Action',901);

//         const result = await request.execute('proc_BindCustomerDashBoard');


//         const returnedData = result.recordset;

//         res.status(201).json({message:'Data Inserted Successfully',data:returnedData});

//     }

//     catch(error){
//         console.error('sql server:',error)
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
 