import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/modules/reducers";


const TodoItem = ({ e }) => {
  const deleteTodo = (id) => {
    dispatch(deleteItem(id))
  }
    
const dispatch = useDispatch()

  const isDoneHandler = (id) => {
      dispatch(updateItem(id))
   
  };
  return (
    <>
      <Link to={`/${e.id}`}>상세보기</Link>
      <h2>{e.title}</h2>
      <div>{e.body}</div>
      <button onClick={() => deleteTodo(e.id)}>삭제</button>
      <button onClick={() => isDoneHandler(e.id)}>
        {e.isDone ? '취소' : '완료'}
      </button>
      <br></br>
    </>
  );
};

export default TodoItem;
//onClick={() => deleteTodo(todo.id)}
