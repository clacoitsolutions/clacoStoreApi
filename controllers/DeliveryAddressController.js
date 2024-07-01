
export const Adreesscontroller = async (req, res) => {
  try {
    const { customerCode } = req.body;

    const pool = req.pool;
    await pool.connect();
    const request = pool.request();

    // Assuming 'proc_InsertDeliveryAddress' is your stored procedure
    request.input("Action", "2");
    request.input("customercode", customerCode);

    const result = await request.execute("proc_InsertDeliveryAddress");

    const addresses = result.recordset;

    res.status(200).json({ addresses });
  } catch (error) {
    console.error("SQL error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// New Code Add For change deliveryAddress Current Address

export const ChangeDeliveryCurrentstatus = async (req, res) => {
  try {
      const {srno,CustomerId} = req.body;

      const pool = req.pool;
      await pool.connect();
      const request = pool.request();

      request.input('srno', srno);
      request.input('CustomerId',CustomerId);


      request.input('Action',123);

      const result = await request.execute('proc_BindCustomerDashBoard');

      const returnedData = result.recordset;

      res.status(200).json({message:"Current Status Channged Successfully",data:returnedData})
  }
  catch(error){
      console.error('sql server:',error)
      res.status(500).json({error:'Internal Server error'});
  }
}    

// New Code add for choose bydefault address


export const choosedefaultdeliveryaddress = async (req, res) => {
  try {
      const {CustomerId} = req.body;

      const pool = req.pool;
      await pool.connect();
      const request = pool.request();

      // request.input('srno', srno);
      request.input('CustomerId',CustomerId);


      request.input('Action',124);

      const result = await request.execute('proc_BindCustomerDashBoard');

      const returnedData = result.recordset;

      res.status(200).json({message:"This is Your Products in offer",data:returnedData})
  }
  catch(error){
      console.error('sql server:',error)
      res.status(500).json({error:'Internal Server error'});
  }
}    


