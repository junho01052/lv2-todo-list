import { useState } from "react";
import Input from "../components/Input";

import todoData from "../data/TodoData"

const Home = () => {

    const [todo, setTodo] = useState(todoData)
    // console.log(todo)

    return (
        <>
        <Input todo={todo} setTodo={setTodo}/>
        {todo && todo.map(e => {
            return (
                <>
                    <div>{e.title}</div>                    
                    <div>{e.body}</div>
                </>
            )
        })}
        </>
    );
}
 
export default Home;