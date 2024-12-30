const express = require('express');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

const port = process.env.PORT || 6600;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./routers"));

app.listen(port, () => {
    console.log(`server on ${port}`);
})