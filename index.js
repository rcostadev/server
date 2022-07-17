const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewere
app.use(cors());
app.use(express.json());

// Router






app.listen(5000, () => {
    console.log("Servidor OK")
});