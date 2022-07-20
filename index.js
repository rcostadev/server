const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewere
app.use(cors());
app.use(express.json()); //req.body

//=-=-=-=-=-=-=Router

// create a todo - Rota para criar tarefa

app.post("/todos", async(req, res) =>{
    try{
        const { descricao } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (descricao) VALUES($1) RETURNING *",
            [descricao]
        );

        res.json(newTodo.rows[0]);

    }catch(err){
        console.error(err.message)
    }
})

//Todas as tarefas

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//Tarefa especifica

app.get("/todo/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//Atualizar

app.put("/todos/:id", async(req, res) => {
    try {
        
        const {id} = req.params;
        const {descricao} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET descricao = $1 WHERE todo_id = $2", 
        [descricao, id]);

        res.json("Atualizado")
    } catch (err) {
        console.error(err.message)
    }
});

//dalete

app.delete("/todos/:id", async(req, res) => {
    try {
        
        const {id} = req.params;
        const {descricao} = req.body;
        const updateTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("deletado")
    } catch (err) {
        console.error(err.message)
    }
}); 




app.listen(5000, () => {
    console.log("Servidor OK")
});