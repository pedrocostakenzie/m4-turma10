import { Router } from "express";
import TarefaControllers from "../controllers/tarefa.js";

const router = Router()

router.get("", TarefaControllers.listarTodas)
router.post("", TarefaControllers.criar)
router.patch("/:id", TarefaControllers.atualizar)
router.delete("/:id", TarefaControllers.deletar)

export default router