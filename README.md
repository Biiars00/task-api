# Task API

## Sobre o projeto

A **Task API** foi desenvolvida para realizar o ***CRUD*** de determinadas tarefas a serem definidas pelo usuário. 

> Este projeto faz parte do primeiro desafio do módulo I, do curso de **NodeJS**, da plataforma *Rocketseat*.

## Funcionalidades

Nesta versão back-end, o usuário poderá:

> *De forma local*

- **Listar** todas as tarefas cadastradas

   | Método| URL   |
   |-------|-------|
   | GET   | http://localhost:3000/tasks |

- **Listar por ID** uma tarefa específica cadastrada

   | Método| URL   |
   |-------|-------|
   | GET   | http://localhost:3000/tasks/:id |

- **Atualizar** uma tarefa

   | Método| URL   |
   |-------|-------|
   | PUT   | http://localhost:3000/tasks/:id |

- **Cadastrar** uma nova tarefa

   | Método | URL   |
   |--------|-------|
   | POST   | http://localhost:3000/tasks |

- **Excluir** uma tarefa

   | Método   | URL   |
   |----------|-------|
   | DELETE   | http://localhost:3000/tasks/:id |

- **Alterar dados específicos** e limitados de uma tarefa e consultá-las, quando estas, estiverem sido completadas

   | Método | URL   |
   |--------|-------|
   | POST   | http://localhost:3000/tasks/:id/complete |

- **Baixar arquivo .csv**

   | Método | URL   |
   |--------|-------|
   | POST   | http://localhost:3000/tasks/multipart/form-data |

## Banco de dados

As tarefas cadastradas ficam armazenadas no banco de dados **MongoDB**, orientado a documentos.

```javascript
mongoose.connect("mongodb+srv://---------@database.---------.mongodb.net/---------");
```

> Foi utilizado o **Mongoose** (biblioteca de programação orientada a objetos JavaScript) para criar a conexão entre o MongoDB e o ambiente de tempo de execução **NodeJS**.

```javascript
const taskSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    completed_at: { type: Boolean },
    created_at: { type: String },
    updated_at: { type: String },
});
```

É possível importar dados do banco em arquivo *.csv* :

```javascript
export function importarArquivoCsv(req, res) {
  fs.createReadStream("[texto removido]")
    .pipe(parse())
    .on("data", (data) => {
      tasksList.push(data);
    })
}
```

## Linguagens e Ferramentas utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

#### Desenvolvido por:

💕 [Beatriz Ribeiro | Biiars00](https://github.com/Biiars00)






