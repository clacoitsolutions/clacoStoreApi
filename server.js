import express from "express";
import pkg from "mssql";
import exampleRoute from "./routes/exampleRoute.js";
import dotenv from "dotenv"
import {dbConfig} from "./config/db.js"; // Import the database configuration
const {ConnectionPool} = pkg
const app = express();

dotenv.config();

// Create a connection pool using the imported configuration
const pool = new ConnectionPool(dbConfig);

// Middleware to add the database pool to request object
app.use((req, res, next) => {
    req.pool = pool;
    next();
});

// Import and use the product route
app.use("/product", exampleRoute);


app.get("/", (req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});
