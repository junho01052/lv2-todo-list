import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/modules/todos";
import useInput from "../../hooks/useInput";
import InputBox from "./InputBox";
import Button from "../button/Button";
import { styled } from "styled-components";
import { faCircleXmark, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const InputList = () => {
  const [title, onChangeTitle] = useInput();
  const [body, onChangeBody] = useInput();

  const dispatch = useDispatch();

  const newObj = {
    id: uuidv4(),
    title,
    body,
    isDone: false,
  };
  const addTodo = () => {
    dispatch(addItem(newObj));
  };

  return (
    <StInputList>
      <StInputBoxContainer>
        <InputBox type="text" value={title} placeholder="제목을 입력해주세요" onChange={onChangeTitle} />
        <InputBox type="text" value={body} placeholder="내용을 입력해주세요" onChange={onChangeBody} />
      </StInputBoxContainer>
      <Button onClick={addTodo} sort="add">
        추가
      </Button>
    </StInputList>
  );
};

export default InputList;

const StInputList = styled.div`
  display: flex;
`;

const StInputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
