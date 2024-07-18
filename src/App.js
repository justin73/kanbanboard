
import React from 'react';
import './App.css';
import { KanbanProvider } from './context'
import Board from "./components/board"


const App = ()=>{
  return (<div className="kanban-board">
      <h1 className="boardTitle">Kanban Board</h1>
      <KanbanProvider>
        <Board/>
      </KanbanProvider>
    </div>)
}

export default App;

