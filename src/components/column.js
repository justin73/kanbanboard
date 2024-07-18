import { useKanbanBoard } from "../context"
import { Card } from "./card"

export const Column = ({ id, title }) => {
  const {columns} = useKanbanBoard();
  const cards = columns[id].cards;

  return <div className="column">
    <h1 className="columnTitle">{title}</h1>
    <div>
      {cards.map(card => <Card key={card.id} card={card} currentColumn={title}/>)}
    </div>
  </div>
}