export const getCity = async (req, res) => {
  try {
    const { id } = req.body;

    // Assuming you have configured your database connection pool
    const pool = req.pool;
    await pool.connect();
    const request = pool.request();



    const result = await request.query("select * from citymaster");

    const cities = result.recordset;

    res.status(200).json({ cities });

  } 
  catch (error) {

    console.error("SQL error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



export const getState = async (req, res) => {
  try {

   const pool = req.pool;
    await pool.connect();
    const request = pool.request();

    const result = await request.query("SELECT '0' AS State_id,'Select State' AS State_name UNION ALL SELECT State_id, State_name + ' (' + State_Abr + ')' AS State_name FROM State_Master");

    const states = result.recordset;

    res.status(200).json({ states });

  } 
  
  catch (error) {
    console.error("SQL error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};