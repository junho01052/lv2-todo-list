import { styled } from "styled-components";

const InputBox = ({ type, placeholder, value, onChange }) => {
  return (
    <>
      <StInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default InputBox;

const StInput = styled.input`
  border: 1px solid rgb(175, 175, 175);
  height: 25px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
