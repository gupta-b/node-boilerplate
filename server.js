const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

connectDb();
const app = express()

const port = process.env.PORT || 6600;
app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server on ${port}`);
})