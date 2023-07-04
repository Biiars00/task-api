// import { importarArquivoCsv } from "./documents/documentCsv.js";
import tasks from "../models/Task.js";

class TaskController {
  // Definição dos métodos HTTP

  // GET
  static listarTarefas = (req, res) => {
    tasks.find((err, tasks) => {
      res.status(200).json(tasks);
    });
  };

  // GET/ID
  static listarTarefasPorId = (req, res) => {
    const id = req.params.id;
    tasks.findById(id, (err, tasks) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} Id da tarefa não localizado!` });
      } else {
        res.status(200).send(tasks);
      }
    });
  };

  // POST
  static cadastarTarefas = (req, res) => {
    let task = new tasks(req.body);
    task.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar tarefa.` });
      } else {
        res.status(201).send(task.toJSON());
      }
    });
  };

  // POST // CSV
  static importarArquivoCsv = (req, res) => {
    tasks.find((err, tasks) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao baixar arquivo!` });
      } else {
        res.status(200).json(tasks);
      }
    });
  };

  // PUT
  static atualizarTarefas = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Tarefa atualizada com sucesso!" });
      } else {
        res.status(500).sed({ message: err.message });
      }
    });
  };

  // PATCH
  static atualizarTarefaCompleta = async (req, res) => {
    const id = req.params.id;
    const doc = await tasks.findById(id);
    const isCompletedAt = doc.completed_at

    const completedAt = {
      completed_at: !isCompletedAt
    }

    tasks.findByIdAndUpdate(id, completedAt , (err, docs) => {
      if(!err) {
        res.status(200).send({ message: `Updated task ${docs} ----` });
      } else {
        res.status(500).sed({ message: err.message })
      }
    })
  }

  // DELETE
  static removerTarefas = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Tarefa removida com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default TaskController;
