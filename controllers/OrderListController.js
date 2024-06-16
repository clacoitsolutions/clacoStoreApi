export const orderlistcontroller = async (req, res) => {
    try {
        // Validate input parameters
        const { CustomerId } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
        request.input("Action", "96");
        request.input("CustomerId", CustomerId);
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("proc_BindCustomerDashBoard");

        // Retrieve the order items from the result
        const orderItems = result.recordset; // Assuming the returned data is in the form of a recordset

        // Send a success response along with the returned data and a success message
        res.status(200).json({ message: 'Order items retrieved successfully', orderItems: orderItems });

    } catch (error) {
        // Handle errors
        console.error("SQL error", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const deletecart = async (req,res)=>{

    try{
        const{CustomerID,cartlistid}=req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


        request.input('UserCode',CustomerID);
        request.input('ProductID',cartlistid);
        request.input('Action',1);

        const result = await request.execute('proc_RemoveFromCart');

        const returnedData = result.recordset;

        res.status(200).json({message:"Delete Successfully",data:returnedData});


    }
    catch(error){
        console.error("sql server",error);
        req.status(500).json({error:"Internal Srver Error"});
    }
}

export const clickorderdetails = async (req, res) => {
    try {
        // Validate input parameters
        const { orderId } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
        request.input("Action", "95");
        request.input("orderId", orderId);
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("proc_BindCustomerDashBoard");

        // Retrieve the order items from the result
        const orderItems = result.recordset; // Assuming the returned data is in the form of a recordset

        // Send a success response along with the returned data and a success message
        res.status(200).json({ message: 'Order items retrieved successfully', orderItems: orderItems });

    } catch (error) {
        // Handle errors
        console.error("SQL error", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
//  New Code By Abhimanyu Singh

export const CancelOrder = async (req, res) => {
    try {
        // Validate input parameters
        const { OrderId,CancelReason } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
        request.input("Action", "1");
        request.input("orderId", OrderId);
        request.input("Cancelreason", CancelReason);

        // Execute the stored procedure
        const result = await request.execute("proc_CancelOrder");

        // Retrieve the order items from the result
        const orderItems = result.recordset; // Assuming the returned data is in the form of a recordset

        // Send a success response along with the returned data and a success message
        res.status(200).json({ message: 'Order items Cancelled successfully', orderItems: orderItems });

    } catch (error) {
        // Handle errors
        console.error("SQL error", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
// End Code By Abhimanyu Singh



