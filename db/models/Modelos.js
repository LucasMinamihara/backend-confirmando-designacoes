import { model } from "mongoose";

const designacaoSchema = {
  tipo: String,
  principal: String,
  ajudante: String,
};

const confirmadoSchema = {
  dia: Number,
  nome: String,
  confirmado: Boolean,
};

const Designacao = model("Designacao", designacaoSchema);
const Confirmado = model("Confirmado", confirmadoSchema);

export { Designacao, Confirmado };
