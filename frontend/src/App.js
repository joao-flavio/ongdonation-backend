import React from 'react';
import Header from './Header';
function App() {
  let contador = 0;
  function increment(){
    contador += 1;
  }
  return (
    <div>
      <Header>Contador: {contador}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
      
  );
}

export default App;
