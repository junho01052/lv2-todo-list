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
  border-radius: 3px;
  border: none;
  width: 40px;
  height: 20px;
  color: white;

  ${(props) =>
    props.sort === "add" &&
    css`
      background-color: #0f1846;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      width: 80px;
      height: 55px;
    `}

  ${(props) =>
    props.sort === "delete" &&
    css`
      background-color: #db8181;
    `}

    ${(props) =>
    props.sort === "doneOrCancle" &&
    css`
      background-color: #7e7eba;
    `}
`;
