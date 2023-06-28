import { useState } from 'react';
import Input from '../components/Input';
import todoData from '../data/TodoData';
import TodoItemList from '../components/TodoItemList';

const Home = () => {
  const [todo, setTodo] = useState(todoData);

  return (
    <>
      <Input todo={todo} setTodo={setTodo} />
      <TodoItemList todo={todo} setTodo={setTodo} />
    </>
  );
};

export default Home;
