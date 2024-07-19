export const BankPayment = async (req, res) => {
    try {
        // Validate input parameters
        const { CustomerId ,AccountNumbe,IFSC_Number,Bank_Name} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("CustomerId", CustomerId);
        request.input("AccountNumber", AccountNumbe);
        request.input("IFSC_Number", IFSC_Number);
        request.input("Bank_Name", Bank_Name);
        request.input("Action", "1");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_BankDetailsAction");

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

export const BankPAyments = async (req, res) => {
    try {
        // Validate input parameters
        const { CustomerId} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("CustomerId", CustomerId);
        
        request.input("Action", "2");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_BankDetailsAction");

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

export const CardApi = async (req, res) => {
    try {
        // Validate input parameters
        const { CardNumber,CVV,ExpireDate} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("CardNumber", CardNumber);
        request.input("CVV", CVV);
        request.input("ExpireDate", ExpireDate);
        
        request.input("Action", "1");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_Card");

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


export const ShowCardApi = async (req, res) => {
    try {
        // Validate input parameters
        const { CID} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("CID", CID);
       
        
        request.input("Action", "2");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_Card");

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

export const UPIApi = async (req, res) => {
    try {
        // Validate input parameters
        const { UPI_ID,Mobile_Number,UpI_Number} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("UPI_ID", UPI_ID);
        request.input("Mobile_Number", Mobile_Number);
        request.input("UpI_Number", UpI_Number);
        
        request.input("Action", "1");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("Proc_UPI");

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


export const ShowUPIApi = async (req, res) => {
    try {
        // Validate input parameters
        const { UPI_ID,Mobile_Number,UpI_Number} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("UPI_ID", UPI_ID);
         
        request.input("Action", "2");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("Proc_UPI");

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
