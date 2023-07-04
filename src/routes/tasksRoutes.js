import express from "express";
import TaskController from "../controllers/tasksController.js";

const router = express.Router();

// Rotas da aplicação
router
  .get("/tasks", TaskController.listarTarefas)
  .get("/tasks/:id", TaskController.listarTarefasPorId)
  .post("/tasks", TaskController.cadastarTarefas)
  .post("/tasks/multipart/form-data", TaskController.importarArquivoCsv)
  .put("/tasks/:id", TaskController.atualizarTarefas)
  .patch("/tasks/:id/complete", TaskController.atualizarTarefaCompleta)
  .delete("/tasks/:id", TaskController.removerTarefas);

export default router;
