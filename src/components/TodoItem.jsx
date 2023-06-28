import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ChangeItem, RemoveItem } from '../redux/modules/addItem';
import { styled } from 'styled-components';
const TodoItem = ({ e }) => {
  const deleteTodo = (id) => {
    dispatch(RemoveItem(id));
  };
  const isDoneHandler = (id) => {
    dispatch(ChangeItem(id));
  };
  const dispatch = useDispatch();

  return (
    <WrapperBox>
      <Link to={`/${e.id}`}>상세보기</Link>
      <h2>{e.title}</h2>
      <div>{e.body}</div>
      <WrapBtn>
        <Bnt1 onClick={() => deleteTodo(e.id)}>삭제</Bnt1>
        <Btn2 onClick={() => isDoneHandler(e.id)}>
          {e.isDone ? '취소' : '완료'}
        </Btn2>
      </WrapBtn>
    </WrapperBox>
  );
};

export default TodoItem;
const WrapperBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;

const Bnt1 = styled.button`
  border: 1px solid red;
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const Btn2 = styled(Bnt1)`
  border: 1px solid green;
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
`;
