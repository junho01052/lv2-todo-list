import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoItemList = () => {
  const data = useSelector((state) => {
    return state.todos;
  });

  return (
    <>
      <div>
        <h1>Working...🔥</h1>
        {data
          .filter((item) => item.isDone === false)
          .map((e) => {
            return <TodoItem key={e.id} e={e} />;
          })}
      </div>
      <div>
        <h1>Done...</h1>
        {data
          .filter((item) => item.isDone === true)
          .map((e) => {
            return <TodoItem key={e.id} e={e} />;
          })}
      </div>
    </>
  );
};

export default TodoItemList;
