import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { leaderboardAtom } from '../../recoil';

const BigLeaderboard = () => {
  const leaderBoard = useRecoilValue(leaderboardAtom);
  return (
    <Wrapper className={`${leaderBoard && 'slide_up'}`}>
      <Inner>BigLeaderBoard</Inner>
    </Wrapper>
  );
};

export default BigLeaderboard;

const Wrapper = styled.div`
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      28.63% 50% at 50% 50%,
      #2c2c2c 1.31%,
      #1c1c1c 100%
    )
    no-repeat;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  &.slide_up {
    top: 0;
    opacity: 1;
  }
`;

const Inner = styled.div`
  width: 40%;
  height: 60%;
`;
