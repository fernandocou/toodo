import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);
  const [completa, setCompleta] = useState(false);


  function onSubmit(event) {
    event.preventDefault();
    setLista([...lista, tarefa]);
    console.log(lista.tarefa);
  }


  function remove(item) {
     setLista(lista.filter(x=>x != item))
  }

  return (
    <div className="container">
      <div className="header">

        <h1>TODO e mais um pouco</h1>

        <form onSubmit={onSubmit}>
          <input placeholder="Digite suas Tarefas..."
            className="task"

            value={tarefa}
            onChange={(e)=> setTarefa(e.target.value)} />
          <button class="addBtn"> Adicionar</button>
        </form>
      </div>

      <ul>
        {lista.map(item =>
          <li>
            <input type="checkbox" className="check"/> 
            {item}
            <span onClick={() => remove(item)} className="close">Remover</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
 