import TarefaServices from "../services/tarefa.js";


class TarefaControllers {
  static criar(req, res) {
    const { titulo, descricao } = req.body
    if (!titulo || !descricao) {
      res.status(400).json({mensagem: "erro ao criar"})
    }
    const novaTarefa = TarefaServices.criar(titulo, descricao)
    res.status(201).json(novaTarefa)
  }
  static listarTodas(req, res) {
    const tarefas = TarefaServices.listarTodas()
    res.json(tarefas)
  }
  static atualizar(req, res) {
    const { id } = req.params
    const tarefaAtualziada = TarefaServices.atualizar(id, req.body)
    res.json(tarefaAtualziada)
  }
  static deletar(req, res) {
    const { id } = req.params
    TarefaServices.deletar(id)
    res.status(204).json()
  }
}

export default TarefaControllers;