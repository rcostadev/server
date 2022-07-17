const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "costaricardo",
    host: "localhost",
    port: 5000,
    database: "todolist"
}); 

module.exports = pool;

