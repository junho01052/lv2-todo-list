import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Input = ({todo, setTodo}) => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")    

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

        setTodo([...todo,newObj])       

    }

    return (
        <>
            <input type="text" value={title} onChange={onChangeTitle}></input>
            <input type="text" value={body} onChange={onChangeBody}></input>
            <button onClick={addTodo}>추가하기</button>
        </>
    );
}
 
export default Input;