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
            if (user.EmailAddress === UserName) {
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


 
export const addtoCartcontroller = async (req, res) => {

    try {


        const pool = req.pool;
        await pool.connect();
        const request = pool.request();


        const result = await request.query('SELECT * FROM CartList');
        res.json(result.recordset);
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }


}