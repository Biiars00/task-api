import express from "express";
import db from "./config/db-connect.js"
import routes from "./routes/index.js"

// Conexão com o banco de dados
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
})

const app = express();
app.use(express.json());
routes(app);

// app.get('/tasks/:id', (req, res) => {
//     let index = searchTasks(req.params.id);
//     res.json(tasks[index]);
// })

export default app;
