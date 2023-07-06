import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const TodoItemList = () => {
  const data = useSelector((state) => {
    return state.todos;
  });

  return (
    <StTodoItemList>
      <span>할 일</span>
      <StTodoItemBox>
        {data
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </StTodoItemBox>

      <span>한 일</span>
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
  margin-top: 50px;
  padding-left: 30px;
  width: 100%;

  span {
    color: #0f1846;
    font-size: 25px;
    font-weight: 600;
    text-shadow: 1.2px 1.2px gray;
  }
`;

const StTodoItemBox = styled.div`
  border: none;
  height: 400px;
  min-width: 600px;
  flex-wrap: wrap;
  display: flex;
  overflow: auto;
  gap: 20px;
  margin-bottom: 30px;
`;
