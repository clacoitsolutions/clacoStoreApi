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
import getorderlist from "./routes/OrderListRoute.js";
import { dbConfig } from "./config/db.js"; // Import the database configuration
import trackingorderRoute from "./routes/trackingorderRoute.js";
import mywalletRoute from "./routes/mywalletRoute.js";
<<<<<<< HEAD
import SearchRoute from "./routes/SearchRoute.js";
import FillterRoute from "./routes/FillterRoute.js";

const {ConnectionPool} = pkg
=======

const { ConnectionPool } = pkg;
>>>>>>> f49bce6754061d18bc0a7ced7d95d7955f9c09d3

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
<<<<<<< HEAD
app.use("/",userRoute);
app.use("/",bannerApiRoute);
app.use("/",productCategoryRoute);
app.use("/",SearchRoute);
app.use("/",FillterRoute);
app.use("/",trackingorderRoute);

app.get("/", (req,res)=>{
    res.send("hello claco team")
})
=======
app.use("/", userRoute);
app.use("/", bannerApiRoute);
app.use("/", productCategoryRoute);
app.use("/", deliverAdress);
app.use("/", GetCity);
app.use("/", getorderlist);
app.use("/", trackingorderRoute);
app.use("/", mywalletRoute);

app.get("/", (req, res) => {
    res.send("hello claco team");
});
>>>>>>> f49bce6754061d18bc0a7ced7d95d7955f9c09d3

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});
