import { NOVO_NUMERO_UM, NOVO_NUMERO_DOIS } from "../actions/types";

const initialState = {
  numeroUm: 0,
  numeroDois: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOVO_NUMERO_UM:
      return { ...state, numeroUm: action.payload };
    case NOVO_NUMERO_DOIS:
      return { ...state, numeroDois: action.payload };
    default:
      return state;
  }
};
