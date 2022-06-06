import { readFileSync } from "fs";
import Tarefa from "../models/tarefa.js";
import { escreverArquivo } from "../utils/index.js";


class TarefaServices {
  static criar(titulo, descricao) {
    const novaTarefa = new Tarefa(titulo, descricao)
    novaTarefa.salvar()
    return novaTarefa
  }

  static listarTodas() {
    const { tarefas } = JSON.parse(readFileSync("./src/database/db.json"))
    return tarefas
  }

  static atualizar(idTarefa, dados) {
    const db = JSON.parse(readFileSync("./src/database/db.json"))
    let tarefa = db.tarefas.find(tarefa => tarefa.id === idTarefa)
    const indiceTarefa = db.tarefas.findIndex(tarefa => tarefa.id === idTarefa)

    tarefa = {...tarefa, ...dados}

    db.tarefas.splice(indiceTarefa, 1, tarefa)

    escreverArquivo(db)

    return tarefa
  }

  static deletar(idTarefa) {
    const db = JSON.parse(readFileSync("./src/database/db.json"))

    const indiceTarefa = db.tarefas.findIndex(tarefa => tarefa.id === idTarefa)

    db.tarefas.splice(indiceTarefa, 1)

    escreverArquivo(db)

    return {}
  }
}

export default TarefaServices;