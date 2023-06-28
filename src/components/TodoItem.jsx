const TodoItem = ({ e, todo, setTodo }) => {
  const deleteTodo = (id) => {
    const deleteItem = todo.filter((item) => item.id !== id);
    setTodo(deleteItem);
  };
  const isDoneHandler = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };
  return (
    <>
      <h2>{e.title}</h2>
      <div>{e.body}</div>
      <button onClick={() => deleteTodo(e.id)}>삭제</button>
      <button onClick={() => isDoneHandler(e.id)}>
        {e.isDone ? '취소' : '완료'}
      </button>
    </>
  );
};

export default TodoItem;
//onClick={() => deleteTodo(todo.id)}
