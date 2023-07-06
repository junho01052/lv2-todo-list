import { css, styled } from "styled-components";

const Button = ({ children, onClick, sort }) => {
  return (
    <>
      <StBtn onClick={onClick} sort={sort}>
        {children}
      </StBtn>
    </>
  );
};

export default Button;

const StBtn = styled.button`
  cursor: pointer;
  border-radius: 6px;
  border: none;
  width: 80px;
  height: 57px;
  color: white;

  ${(props) =>
    props.sort === "add" &&
    css`
      background-color: #343434;
    `}
`;
