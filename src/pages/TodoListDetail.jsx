import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const TodoListDetail = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const data = useSelector((state) => {
        return state.reducers
    })

    const foundData = data.find((item) => {
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