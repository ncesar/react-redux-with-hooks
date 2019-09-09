import { createStore } from 'redux'; //Cria a Store que vai ter o state do aplicativo
import { Reducers } from '../reducers'; //Especifica como o state da aplicação muda em resposta as Actions enviadas para a Store

export const Store = createStore(Reducers);