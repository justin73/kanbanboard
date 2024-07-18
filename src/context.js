import { createContext, useContext, useState } from "react";
import { TODO, IN_PROGRESS, DONE, DONE_LABEL, TODO_LABEL, IN_PROGRESS_LABEL} from "./const";

export const KanbanContext = createContext();

// mimic data returned by the server
const INITIAL_STATE = {
  [TODO]: {
    id: TODO,
    title: TODO_LABEL,
    cards: [
      { id: 13, title: "Card 13" },
      { id: 24, title: "Card 24" },
      { id: 34, title: "Card 34" },
      { id: 45, title: "Card 45" }
    ]
  },
  [IN_PROGRESS]:{
    id: IN_PROGRESS,
    title: IN_PROGRESS_LABEL,
    cards: [
      { id: 12, title: "Card 12" },
      { id: 22, title: "Card 22" },
      { id: 32, title: "Card 32" },
      { id: 42, title: "Card 42" }
    ]
  },
  [DONE]: {
    id: DONE,
    title: DONE_LABEL,
    cards: [
      { id: 11, title: "Card 11" },
      { id: 21, title: "Card 21" },
      { id: 31, title: "Card 31" },
      { id: 41, title: "Card 41" }
    ]
  }
}

export const KanbanProvider = ({children}) => {
  const [columns, setColumns] = useState(INITIAL_STATE);

  const moveCard = ({card, from, to}) => setColumns(prevColumns => {
    return ({
    ...prevColumns,
    [from]: {
      ...prevColumns[from],
      cards: prevColumns[from].cards.filter(c => c !== card)
    },
    [to]:  {
      ...prevColumns[to],
      cards: [...prevColumns[to].cards, card]
    }
  })
  })

  return (
    <KanbanContext.Provider value={{columns, setColumns, moveCard}}>
      {children}
    </KanbanContext.Provider>
  )
}


export const useKanbanBoard = ()=>{
  const context = useContext(KanbanContext);
  if (context === undefined) {
      throw new Error(
          "useKanbanBoard must be used within a KanbanProvider"
      );
  }
  return context;
}