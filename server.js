const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

connectDb();
const app = express()

const port = process.env.PORT || 6600;
app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server on ${port}`);
})

// https://www.youtube.com/watch?v=H9M02of22z4&list=LL