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
            if (user.EmailAddress == UserName) {
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

export const ChangePassword = async (req, res) => {
    try {
        const { Mobile, oldpassword, newpassword } = req.body;

        // Assuming req.pool is a valid database connection pool
        const pool = req.pool;
        const request = pool.request();

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
        const { CustomerId,Name,MobileNo,PinCode,Locality,Address,StateId,CityId,Landmark,AlternativeMobileno,OfferType,Latitude,Longitude,address2 }= req.body;

        const pool= req.pool;
        await pool.connect();

        const request = pool.request();

        request.input('CustomerId',CustomerId);
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


        const result = await request.execute('proc_InsertDeliveryAddress');

        const returned = result.recordset;

        res.status(201).json({message:'Data Inserted Successfully',data:returnedData});
    }
    catch(error){
        console.error('sql server:',error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

}


import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyCz22UHSeOXoKQJVmRUQACJZEoh_guEP-w",
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