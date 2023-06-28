import Input from '../components/Input';
import { styled } from 'styled-components';
import TodoItemList from '../components/TodoItemList';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Input />
        <WrapMain>
          <TodoItemList />
        </WrapMain>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: 0 auto;
`;
const WrapMain = styled.div`
  padding: 0 24px;
`;
