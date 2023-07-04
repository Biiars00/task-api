import express from "express";
import tasks from "./tasksRoutes.js"

// Rota inicial
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Seja bem-vindo(a) ao gerenciador de tarefas!")
    })

    app.use (
        express.json(),
        tasks
    )
}

export default routes

