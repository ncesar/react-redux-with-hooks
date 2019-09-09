import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  newValue: 'Direto do Redux'
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
// Este é o Reducer que será acionado pela action caso ela tenha o type de CLICK_UPDATE_VALUE, caso contrário, manterá o default.
// obs: utilizamos o ...state por que a Store é imutável. E com isso, conseguimos preservar o restante do estado usando o spread operator.