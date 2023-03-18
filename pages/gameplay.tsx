import styled from 'styled-components';

const Gameplay = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <Round>
            <h1>Round 1 of 11</h1>
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
              </Main>
      </Inner>
    </Wrapper>
  );
};

export default Gameplay;

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
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

const Round = styled.div``;

const Stat = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const Score = styled.div``;

const Main = styled.div``;

const ButtonContainer = styled.div``;

const Button = styled.button``;

const ButtonText = styled.span``;

const ButtonIcon = styled.img``;

