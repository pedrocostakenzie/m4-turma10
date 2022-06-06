import { readFileSync } from "fs";
import { v4 as uuid } from "uuid";
import { escreverArquivo } from "../utils/index.js";

class Tarefa {
  constructor(titulo, descricao) {
    this.id = uuid(),
    this.titulo = titulo,
    this.descricao = descricao,
    this.data = new Date(),
    this.status = false
  }

  salvar() {
    const db = JSON.parse(readFileSync("./src/database/db.json"))
    db.tarefas.push(this)
    escreverArquivo(db)
  }

}

export default Tarefa