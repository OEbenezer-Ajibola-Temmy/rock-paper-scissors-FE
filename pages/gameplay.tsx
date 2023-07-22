import styled from 'styled-components';
import { Sidebar, Status, User } from '../components';

const Gameplay = () => {
  return (
    <>
      <Sidebar />
      <Status />
      <Wrapper>
        <Inner>
          <Header>
            <Round>
              <h1>
                Round <span>1</span> of <span>11</span>
              </h1>
            </Round>
            <Stat>
              <Score>
                Score: <span>0</span>
              </Score>
              <Score>
                Score: <span>0</span>
              </Score>
            </Stat>
          </Header>
          <Main>
            <User hand_num={0} />
            <User hand_num={1} />
          </Main>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Gameplay;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 2em 0;
  min-height: 100vh;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Round = styled.div`
  width: 237px;
  height: 63px;
  border-radius: 34px;
  border: 5px solid #ffdb0a;
  display: grid;
  place-items: center;

  h1 {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.04em;
    color: #e3c30c;

    span {
      color: #fff;
    }
  }
`;

const Stat = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2em;
  margin-left: 50px;
`;

const Score = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.3em;

  span {
    font-family: 'Digitalt', sans-serif;
    font-weight: 500;
    font-size: 39px;
    letter-spacing: 0.04em;
    color: #ffdb0a;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const ButtonContainer = styled.div``;

const Button = styled.button``;

const ButtonText = styled.span``;

const ButtonIcon = styled.img``;
