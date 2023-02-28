import express from "express";

import {
  procurandoDesignacao,
  criandoDesignacao,
  retornandoConfirmacaoLucas,
  confirmandoDesignacaoLucas,
  retornoConfirmacaoErik,
  confirmandoDesignacaoErik,
  deletandoDesignacao,
  atualizandoDesignacao,
  deletandoTudo,
  acessandoInicio,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", acessandoInicio);

router.get("/designacao", procurandoDesignacao);

router.post("/designacao", criandoDesignacao);

router.get("/confirmadoLucas", retornandoConfirmacaoLucas);

router.post("/confirmadoLucas", confirmandoDesignacaoLucas);

router.get("/confirmadoErik", retornoConfirmacaoErik);

router.post("/confirmadoErik", confirmandoDesignacaoErik);

router.delete("/designacao/:id", deletandoDesignacao);

router.put("/designacao/:id", atualizandoDesignacao);

router.delete("/deletandoTudo", deletandoTudo);

export default router;
