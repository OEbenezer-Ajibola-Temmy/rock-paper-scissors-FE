import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Sidebar } from '../components';
import { leaderboardAtom } from '../recoil/leaderboardAtom';

const Gameplay = () => {
  const [openLeaderboard, setOpenLeaderboard] = useRecoilState(leaderboardAtom);
  return (
    <>
      <Sidebar />
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
          <Main></Main>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Gameplay;

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin-left: 70px;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Round = styled.div`
  width: 237.68px;
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

const Main = styled.div``;

const ButtonContainer = styled.div``;

const Button = styled.button``;

const ButtonText = styled.span``;

const ButtonIcon = styled.img``;
