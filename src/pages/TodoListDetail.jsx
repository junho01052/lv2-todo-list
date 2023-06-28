import { useParams } from "react-router-dom";
import todoData from '../data/TodoData';
import { useNavigate } from "react-router-dom";

const TodoListDetail = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const foundData = todoData.find((item) => {
        return item.id === parseInt(id)
    })

    return (
        <>  
            <div>{`id : ${id}`}</div>
            <button onClick={() => navigate('/')}>이전으로</button>
            <div>{foundData.title}</div>
            <div>{foundData.body}</div> 
        </>
    );
}
 
export default TodoListDetail;