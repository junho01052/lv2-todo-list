import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/modules/todos";
import { styled } from "styled-components";
import Button from "../button/Button";

const TodoItem = ({ todo }) => {
  const deleteTodo = (id) => {
    dispatch(deleteItem(id));
  };

  const dispatch = useDispatch();

  const isDoneHandler = (id) => {
    dispatch(updateItem(id));
  };

  return (
    <TodoItemStyle>
      <StTodoTitle>{todo.title}</StTodoTitle>
      <div className="content">{todo.body}</div>
      <StTodoItemFooter>
        <Link to={`/${todo.id}`}>상세보기</Link>
        <div>
          <Button sort="delete" onClick={() => deleteTodo(todo.id)}>
            삭제
          </Button>
          <Button sort="doneOrCancle" onClick={() => isDoneHandler(todo.id)}>
            {todo.isDone ? "취소" : "완료"}
          </Button>
        </div>
      </StTodoItemFooter>
    </TodoItemStyle>
  );
};

export default TodoItem;
//onClick={() => deleteTodo(todo.id)}

const TodoItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  border-radius: 3px;
  margin-top: 10px;
  width: 200px;
  height: 150px;
  padding: 5px;
  color: #0f1846;
  background-color: #dde0f4;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  a {
    font-size: 12px;
    color: black;
  }

  h2 {
    font-size: 15px;
  }

  .content {
    font-size: 12px;
    overflow: auto;
  }
`;

const StTodoItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StTodoTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
