import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { AddItem } from '../redux/modules/reducers';

const Input = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };
    dispatch(AddItem(newObj));
    setTitle('');
    setBody('');
  };

  return (
    <>
      <WrapFrom onSubmit={addTodo}>
        <WrapIn>
          <label htmlFor="">제목</label>
          <INPUT
            type="text"
            value={title}
            required
            onChange={onChangeTitle}
          ></INPUT>
          <label htmlFor="">내용</label>
          <INPUT
            type="text"
            value={body}
            required
            onChange={onChangeBody}
          ></INPUT>
        </WrapIn>
        <Btn type="submit">추가하기</Btn>
      </WrapFrom>
    </>
  );
};

export default Input;

const WrapFrom = styled.form`
  background-color: #eee;
  padding: 30px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
`;
const WrapIn = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const INPUT = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;
const Btn = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: rgb(255, 255, 255);
  font-weight: 700;
`;
