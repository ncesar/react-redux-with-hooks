import { CLICK_UPDATE_VALUE } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE, //nome da action
    newValue: value // é o que ele recebe
});
//essa função é o Action Creator, e o que ela retorna, que é um objeto, é a Action. Ao ser enviada, ela vai avisar ao Reducer que o tipo é 
// CLICK_UPDATE_VALUE, além do valor newValue: value, que deve ser atualizado na Store.