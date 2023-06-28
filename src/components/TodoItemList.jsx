import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const TodoItemList = () => {
  const data = useSelector((state) => {
    return state.addItem;
  });

  return (
    <>
      <div>
        <h1>Working...🔥</h1>
        <Items>
          {data
            .filter((item) => item.isDone === false)
            .map((e) => {
              return <TodoItem key={e.id} e={e} />;
            })}
        </Items>
      </div>
      <div>
        <h1>Done...</h1>
        <Items>
          {data
            .filter((item) => item.isDone === true)
            .map((e) => {
              return <TodoItem key={e.id} e={e} />;
            })}
        </Items>
      </div>
    </>
  );
};

export default TodoItemList;

const Items = styled.div`
  display: flex;
  gap: 10px;
`;
