import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { leaderboardAtom } from '../../recoil';

const BigLeaderboard = () => {
  const leaderBoard = useRecoilValue(leaderboardAtom)
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
  background-color: rgba(0, 0, 0, 0.5);
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
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
`;
