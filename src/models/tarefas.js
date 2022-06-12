import mongoose from "../database/index.js";

const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  }, 
  descricao: {
    type: String,
    required: true
  },
  data: {
    type: String,
    default: new Date()
  },
  status: {
    type: Boolean,
    default: false
  }
})

const Tarefa = mongoose.model("Tarefa", TarefaSchema)

export default Tarefa