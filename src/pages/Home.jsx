import Input from "../components/Input";
import TodoItemList from "../components/TodoItemList";
import { styled } from "styled-components";

const Home = () => {
  return (
    <HomeStyle>
      <Input />
      <TodoItemList />
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
