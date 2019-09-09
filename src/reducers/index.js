import { clickReducer } from './clickReducer';
// import { otherReducer } from './OtherReducer';
import { combineReducers } from 'redux'; //Combina os Reducers

export const Reducers = combineReducers({
    clickState: clickReducer, //a chave do objeto(o primeiro) é o nome na qual o estado será acessado pela aplicação
    // otherState: otherReducer //enquant o valor(o segundo)  é o reducer, função pura que filtra os dados e que criaremos adiante.
});