import TodoItem from './TodoItem';

const TodoItemList = ({ todo, setTodo }) => {
  return (
    <>
      <div>
        <h1>Working...🔥</h1>
        {todo
          .filter((item) => item.isDone === false)
          .map((e) => {
            return <TodoItem key={e.id} e={e} todo={todo} setTodo={setTodo} />;
          })}
      </div>
      <div>
        <h1>Done...</h1>
        {todo
          .filter((item) => item.isDone === true)
          .map((e) => {
            return <TodoItem key={e.id} e={e} todo={todo} setTodo={setTodo} />;
          })}
      </div>
    </>
  );
};

export default TodoItemList;
