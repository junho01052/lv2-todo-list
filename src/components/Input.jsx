import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/modules/reducers";


const Input = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")    

    const dispatch = useDispatch();    

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeBody = (e) => {
        setBody(e.target.value)
    }

    const addTodo = () => {
        const newObj = {
            id: uuidv4(),
            title,
            body,
            isDone : false
        }
        dispatch(addItem(newObj))   
        setTitle("")
        setBody("")
    }

    return (
        <>
            <input type="text" value={title} placeholder='제목을 입력해주세요'
            onChange={onChangeTitle}></input>
            <input type="text" value={body} placeholder='내용을 입력해주세요' onChange={onChangeBody}></input>
            <button onClick={addTodo}>추가하기</button> 
        </>         
    );
} 

export default Input;
