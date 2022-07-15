const express = require("express");
const app = express();
const cors = require("cors");

//middlewere
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Servidor OK")
});