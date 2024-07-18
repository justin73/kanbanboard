import { LEFT, RIGHT , TODO_LABEL, IN_PROGRESS_LABEL, DONE_LABEL,TODO, IN_PROGRESS, DONE} from "../const"
import { useKanbanBoard } from "../context";

// Abstracting the mapping logic from component to a constant, mimic a server response, that means, we can support configurable columns
// when we do it this way, we are separating the business logic with the presentation layer (pure component) it makes it more clean and scalable
const MOVE_MAPPINGS = {
  [LEFT]: {
    [IN_PROGRESS_LABEL]: { from: IN_PROGRESS, to: TODO },
    [DONE_LABEL]: { from: DONE, to: IN_PROGRESS }
  },
  [RIGHT]: {
    [TODO_LABEL]: { from: TODO, to: IN_PROGRESS },
    [IN_PROGRESS_LABEL]: { from: IN_PROGRESS, to: DONE }
  }
};

export const Card = ({ card, currentColumn }) => {
  const { moveCard } = useKanbanBoard();

  const handleMove = (direction) => () => {
    const { from, to } = MOVE_MAPPINGS[direction][currentColumn];
    moveCard({card, from, to});
  }

  return <div className="card">
    {currentColumn !== TODO_LABEL && <button className="leftButton" onClick={handleMove(LEFT)}>{"<"}</button>}
    <span>{card.title}</span>
    { currentColumn !== DONE_LABEL && <button className="rightButton" onClick={handleMove(RIGHT)}>{">"}</button>}
  </div>
}