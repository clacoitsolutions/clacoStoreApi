// config/config.js
import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    port: 1234,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // For Azure SQL
        trustServerCertificate: true // For Azure SQL
    }
};
