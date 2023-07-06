import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid black;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
  color: #dde0f4;
  background-color: #0f1846;
`;
