export const SearchCategory = async (req,res)=> {

    try{

        const { ProductCode,CategoryId,VarId,SubCatId, SearchText,Search,Sort,Min,Max,Low  }= req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        request.input('ProductCode',ProductCode);
        request.input('CatId',CategoryId);
        request.input('varId',VarId);
        request.input('StockiestId',SubCatId);
        request.input('SearchText',SearchText);
        request.input('search',Search);
        request.input('Sort',Sort);
        request.input('Min',Min);
        request.input('Max',Max);
        request.input('Low',Low)
        request.input('Action',8);

        const result = await request.execute('proc_GetSingleProductView');

        const returnedData = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});



    }


    catch(error){

        console.error('sql data server',error)

        res.status(500).json({message:'Internal Servel Error'});
    }
}

export const SearchProduct = async (req,res)=>{

    try{
        const{SearchText}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


        request.input('CatId',0);
        request.input('SearchText',SearchText);
 
        
        request.input('Action',10);
        

        const result = await request.execute('proc_GetSingleProductView');

        const returnedData = result.recordset;

        res.status(200).json({message:"Your Order List",data:returnedData});


    }
    catch(error){
        console.error("sql server",error);
        req.status(500).json({error:"Internal Srver Error"});
    }
}

