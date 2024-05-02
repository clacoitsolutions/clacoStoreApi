
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
