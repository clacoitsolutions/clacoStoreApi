import express from "express";
import pkg from "mssql";
import exampleRoute from "./routes/exampleRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import bannerApiRoute from "./routes/bannerApiRoute.js";
import productCategoryRoute from "./routes/productcategoryRoute.js";
import deliverAdress from  "./routes/DeliveryAddressRoute.js";
import bodyparser from "body-parser";
import GetCity from "./routes/CityStateRoute.js";
import OrderListRoute from "./routes/OrderListRoute.js";
import { dbConfig } from "./config/db.js"; // Import the database configuration
import trackingorderRoute from "./routes/trackingorderRoute.js";
import mywalletRoute from "./routes/mywalletRoute.js";
import SearchRoute from "./routes/SearchRoute.js";
import FillterRoute from "./routes/FillterRoute.js";
import myprofileRoute from "./routes/myprofileRoute.js";
import CouponRoutes from "./routes/CoupanRoute.js"

const {ConnectionPool} = pkg
const app = express();

dotenv.config();

// Create a connection pool using the imported configuration
const pool = new ConnectionPool(dbConfig);

// Middleware to add the database pool to request object
// Parse JSON bodies
app.use(bodyparser.json());
app.use((req, res, next) => {
    req.pool = pool;
    next();
});

// CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Import and use the product route
app.use("/product", exampleRoute);
app.use("/category", categoryRoute);
app.use("/",userRoute);
app.use("/",bannerApiRoute);
app.use("/",productCategoryRoute);
app.use("/",SearchRoute);
app.use("/",FillterRoute);
app.use("/",trackingorderRoute);
app.use("/", deliverAdress);
app.use("/", GetCity);
app.use("/", CouponRoutes)
 

app.use("/",OrderListRoute);
app.use("/", mywalletRoute);
app.use("/",myprofileRoute);

app.get("/", (req, res) => {
    res.send("hello claco team");
});

const PORT = process.env.PORT || 2026;
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});
