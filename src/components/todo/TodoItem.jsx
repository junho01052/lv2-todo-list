import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/modules/todos";
import { styled } from "styled-components";

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
      <Link to={`/${todo.id}`}>상세보기</Link>
      <h2>{todo.title}</h2>
      <div className="content">{todo.body}</div>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      <button onClick={() => isDoneHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
      <br></br>
    </TodoItemStyle>
  );
};

export default TodoItem;
//onClick={() => deleteTodo(todo.id)}

const TodoItemStyle = styled.div`
  border: 1px solid black;
  margin-top: 15px;
  width: 200px;
  height: 150px;
  padding: 5px;
  gap: 10px;

  a {
    font-size: 12px;
  }

  h2 {
    font-size: 15px;
  }

  .content {
    font-size: 12px;
  }
`;
