import InputList from "../components/input/InputList";
import TodoItemList from "../components/todo/TodoItemList";
import { styled } from "styled-components";
import Layout from "../ui/Layout";
import Header from "../ui/Header";

const Home = () => {
  return (
    <Layout>
      <Header />
      <HomeStyle>
        <InputList />
        <TodoItemList />
      </HomeStyle>
    </Layout>
  );
};

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 600px;
`;
