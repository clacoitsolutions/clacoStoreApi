import express from "express";
import pkg from "mssql";
import exampleRoute from "./routes/exampleRoute.js";
import categoryRoute from "./routes/categoryRoute.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js";
import bannerApiRoute from "./routes/bannerApiRoute.js";
<<<<<<< HEAD
import productCategoryRoute from "./routes/productcategoryRoute.js";
import deliverAdress from  "./routes/DeliveryAddressRoute.js";
import bodyparser from "body-parser";
 
import GetCity from "./routes/CityStateRoute.js";
import getorderlist from "./routes/OrderListRoute.js";

=======
import productCategoryRoute from "./routes/productcategoryRoute.js"; 
import bodyParser from "body-parser";
>>>>>>> c3820e97383466e55d60d031bda15dae62d242b2
import {dbConfig} from "./config/db.js"; // Import the database configuration

const {ConnectionPool} = pkg
const app = express();
 
dotenv.config();
 


// Create a connection pool using the imported configuration
const pool = new ConnectionPool(dbConfig);

// Middleware to add the database pool to request object
<<<<<<< HEAD
// Parse JSON bodies
app.use(bodyparser.json());
=======
app.use(bodyParser.json());
>>>>>>> c3820e97383466e55d60d031bda15dae62d242b2
app.use((req, res, next) => {
    req.pool = pool;
    next();
});

// Import and use the product route
app.use("/product", exampleRoute);
app.use("/category", categoryRoute);
app.use("/",userRoute);
app.use("/",bannerApiRoute);
app.use("/",productCategoryRoute);
<<<<<<< HEAD
app.use("/",deliverAdress)
app.use("/",GetCity);
app.use("/",getorderlist);
=======

>>>>>>> c3820e97383466e55d60d031bda15dae62d242b2

app.get("/", (req,res)=>{
    res.send("hello claco team")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});
