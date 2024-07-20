export const BankPayment = async (req, res) => {
    try {
        // Validate input parameters
        const { CustomerId ,HolderName,AccountNumber,IFSC_Number,Bank_Name,IsActive} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("CustomerId", CustomerId);
        request.input("Holder_Name",HolderName);
        request.input("AccountNumber", AccountNumber);
        request.input("IFSC_Number", IFSC_Number);
        request.input("Bank_Name", Bank_Name);
        request.input("IsActive",IsActive)
        request.input("Action", "1");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("sp_InsertOrUpdateBankDetails");

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
        const result = await request.execute("sp_InsertOrUpdateBankDetails");

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
        const {CardNumber,CVV,ExpireDate,CustomerId,HolderName,IsActive} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
        
        request.input("CardNumber", CardNumber);
        request.input("CVV", CVV);
        request.input("ExpireDate", ExpireDate);
        request.input("CustomerId", CustomerId);
        request.input("Holder_Name",HolderName)
        request.input("IsActive",IsActive)
        
        request.input("Action", "1");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_CardNumber");

        // Retrieve the order items from the result
        const returnedData = result.recordset;
        // Send a success response along with the returned data and a success message
        res.status(200).json({ message: 'Order items retrieved successfully', data: returnedData });

    } catch (error) {
        // Handle errors
        console.error("SQL error", error);
        res.status(500).json({ error: "Internal server error" });
    }
}; 


export const ShowCardApi = async (req, res) => {
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
        const result = await request.execute("PROC_CardNumber");

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
        const {UPI_ID,Mobile_Number,UpI_Number,AccountName,CustomerId,IsActive} = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("UPI_ID",UPI_ID);
        request.input("Mobile_Number",Mobile_Number);
        request.input("UpI_Number",UpI_Number);
        request.input("AccountName",AccountName);
        request.input("CustomerId",CustomerId);
        request.input("IsActive",IsActive)
        request.input("Action",1);
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_UPIPayment");

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
        const { CustomerId } = req.body;

        const pool = req.pool;
        await pool.connect();
        const request = pool.request();

        // Set up input parameters for the stored procedure
       
        request.input("CustomerId", CustomerId);
         
        request.input("Action", "2");
        // request.input("OrderId", orderId);

        // Execute the stored procedure
        const result = await request.execute("PROC_UPIPayment");

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
