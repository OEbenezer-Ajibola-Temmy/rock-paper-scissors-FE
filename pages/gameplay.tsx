import styled from 'styled-components';
import { ConnectedUser } from '../components';

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
                  <ConnectedUser />
              </Main>
      </Inner>
    </Wrapper>
  );
};

export default Gameplay;

const Wrapper = styled.div`
  min-height: 100vh;
`;
