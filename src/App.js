import React, { useState } from 'react';

//Redux soluciona os problemas de compartilhamento de estados entre componentes, tornando o Redux o centro de onde todas as informações irão sair.
//https://miro.medium.com/max/1750/1*JfU2tL6Pik6VGVE2hkNbjg.png

//store é o container que armazena e centralizar o estado geral da aplicação. É imutável, ou seja, nunca se altera, apenas evolui.

//actions são fontes de informações que são enviadas da aplicação para a Store. Actions são ações que ao ser executada, ativa os Reducers

//Reducers recebem e tratam as informações para que sejam ou não enviadas à Store.

//Conexão dos componentes ao Redux são para poder se inscrever à evolução de estados da Store ou disparar eventos para evolui-la.

import { connect } from 'react-redux'; //Conecta o estado da Store ao componente
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

function App(props) {
  const [input, setInput] = useState("");
  const { clickButton, newValue } = props;
  
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type="text" name="texto" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => clickButton(input)}>Click me!</button>
      <h1>{newValue}</h1>
    </div>
  );
}

const mapStateToProps = store => ({//mapStateToProps transforma um trecho do estado da Store em uma prop utilizável pelo componente, com nome de newValue
  newValue: store.clickState.newValue//E aí, ao acessar a clickState do Reducer, a gente pode extrair a chave newValue, que foi definida no clickReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
