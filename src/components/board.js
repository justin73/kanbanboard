import { Column } from "./column";
import { useKanbanBoard } from "../context";


const Board = ()=>{
  const {columns} = useKanbanBoard();

  return (
    <>
      <div className="columns">
        {Object.keys(columns).map(columnKey=> (
          <Column key={columnKey} id={columnKey} title={columns[columnKey].title} />
        ))}
      </div>
    </>
  )
}


export default Board;