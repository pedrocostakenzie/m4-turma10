import Tarefa from "../models/tarefas.js";

class TarefaServices {
  static async criar(titulo, descricao) {
    const novaTarefa = await Tarefa.create({
      titulo,
      descricao
    })
    return novaTarefa
  }

  static async listarTodas() {
    const tarefas = await Tarefa.find()
    return tarefas
  }

  static async atualizar(idTarefa, dados) {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(idTarefa, {...dados, new: true}, { returnDocument: "after" })
    return tarefaAtualizada
  }

  static async deletar(idTarefa) {
    await Tarefa.findByIdAndRemove(idTarefa)
  }
}

export default TarefaServices;