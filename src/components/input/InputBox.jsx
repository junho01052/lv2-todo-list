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
  border: none;
  background-color: #dde0f4;
  height: 25px;
  width: 200px;
  outline: none;
  border-radius: 2px;
  padding-left: 12px;
  padding-right: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
