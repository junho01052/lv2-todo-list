import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoListDetail = () => {
  const { id } = useParams();
  console.log(id.trim(""));

  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.todos;
  });

  console.log(data);

  const foundData = data.find((item) => {
    return item.id === id.trim("");
  });

  return (
    <>
      <div>{`id : ${id}`}</div>
      <button onClick={() => navigate("/")}>이전으로</button>
      <div>{foundData.title}</div>
      <div>{foundData.body}</div>
    </>
  );
};

export default TodoListDetail;
