import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const TodoItemList = () => {
  const data = useSelector((state) => {
    return state.todos;
  });

  return (
    <StTodoItemList>
      <h1>할 일</h1>
      <StTodoItemBox>
        {data
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </StTodoItemBox>

      <h1>한 일</h1>
      <StTodoItemBox>
        {data
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </StTodoItemBox>
    </StTodoItemList>
  );
};

export default TodoItemList;

const StTodoItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StTodoItemBox = styled.div`
  border: 1px solid #ddd;
  height: 400px;
  min-width: 600px;
  flex-wrap: wrap;
  display: flex;
  overflow: auto;
  gap: 20px;
`;
