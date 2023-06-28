import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
const TodoListDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.addItem;
  });
  const foundData = data.find((item) => {
    return item.id === id;
  });

  return (
    <Wrapper>
      <Main>
        <Header>
          <div>{`id : ${id}`}</div>
          <button onClick={() => navigate('/')}>이전으로</button>
        </Header>
        <Desctription>
          <h1>{foundData.title}</h1>
          <div>{foundData.body}</div>
        </Desctription>
      </Main>
    </Wrapper>
  );
};

export default TodoListDetail;

const Wrapper = styled.div`
  border: 2px solid rgb(160, 63, 63);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const Main = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  button {
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
  }
`;

const Desctription = styled.div`
  margin: 20px;
`;
