import TarefaServices from "../services/tarefa.js";


class TarefaControllers {
  static async criar(req, res) {
    const { titulo, descricao } = req.body
    if (!titulo || !descricao) {
      res.status(400).json({mensagem: "erro ao criar"})
    }
    const novaTarefa = await TarefaServices.criar(titulo, descricao)
    res.status(201).json(novaTarefa)
  }
  static async listarTodas(req, res) {
    const tarefas = await TarefaServices.listarTodas()
    res.json(tarefas)
  }
  static async atualizar(req, res) {
    const { id } = req.params
    const tarefaAtualziada = await TarefaServices.atualizar(id, req.body)
    res.json(tarefaAtualziada)
  }
  static async deletar(req, res) {
    const { id } = req.params
    await TarefaServices.deletar(id)
    res.status(204).json()
  }
}

export default TarefaControllers;