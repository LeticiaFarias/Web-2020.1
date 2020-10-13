import { NOVO_NUMERO_UM, NOVO_NUMERO_DOIS } from "./types";

export default {
  novoNumeroUm(numeroUm) {
    return { type: NOVO_NUMERO_UM, payload: numeroUm };
  },
  novoNumeroDois(numeroDois) {
    return { type: NOVO_NUMERO_DOIS, payload: numeroDois };
  },
};
