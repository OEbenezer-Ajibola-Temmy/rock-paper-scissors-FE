import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { leaderboardAtom } from '../../recoil';
import CloseButton from '../General/CloseButton';
import Image from 'next/image';
import ic_star_small from '../../public/svgs/ic-star_small.svg';
import ic_star_medium from '../../public/svgs/ic-star_medium.svg';
import ic_star_big from '../../public/svgs/ic-star_big.svg';
import { leadersData } from '../../utils/leadersData';

const BigLeaderboard = () => {
  const leaderBoard = useRecoilValue(leaderboardAtom);
  return (
    <Wrapper className={`${leaderBoard && 'slide_up'}`}>
      <Inner>
        <CloseButton top={-34} right={-50} />
        <CardContainer>
          <CardInner>
            <h1>Leaderboard</h1>
            <LeaderTable>
              <h3>Rank</h3>
              <h3>Username</h3>
              <h3>Points</h3>
            </LeaderTable>
            <LeaderDisplay>
              {leadersData.map((leader: any, i: number) => (
                <LeaderDetails key={i}>
                  <h3>{leader.rank}</h3>
                  <StarCtn>
                    {leader.star === 1 ? (
                      <Image src={ic_star_small} alt="star" />
                    ) : leader.star === 2 ? (
                      <>
                        <Image src={ic_star_small} alt="star" />
                        <Image src={ic_star_medium} alt="star" />
                      </>
                    ) : leader.star === 3 ? (
                      <>
                        <Image src={ic_star_small} alt="star" />
                        <Image src={ic_star_medium} alt="star" />
                        <Image src={ic_star_big} alt="star" />
                      </>
                    ) : null}
                  </StarCtn>
                  <h3>{leader.username}</h3>
                  <h3>{leader.points}</h3>
                </LeaderDetails>
              ))}
            </LeaderDisplay>
          </CardInner>
        </CardContainer>
      </Inner>
    </Wrapper>
  );
};

export default BigLeaderboard;

const Wrapper = styled.div`
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
      28.63% 50% at 50% 50%,
      #2c2c2c 1.31%,
      #1c1c1c 100%
    )
    no-repeat;
  z-index: 200;
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
  width: 50%;
  height: 60%;
  position: relative;
`;

const CardContainer = styled.div``;

const CardInner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1c1c1c;
  border-radius: 1.58506rem;
  background: #1c1c1c;
  box-shadow: 0.9px 6.6px 16px 2px rgba(0, 0, 0, 0.8);

  h1 {
    font-weight: 500;
    font-size: 35.7022px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #67eb00;
    text-transform: uppercase;
  }
`;

const LeaderTable = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #ffdb0a;
    text-transform: uppercase;
  }
`;

const LeaderDisplay = styled.div`
  width: 100%;
  text-transform: uppercase;
`;

const LeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
  border-top: 1.1px solid rgba(255, 255, 255, 0.33);
  padding: 9px 0 0 0;
  position: relative;

  h3 {
    color: #f8ffff;
    font-size: 1.318rem;
    font-weight: 500;
    letter-spacing: 0.05275rem;

    &:nth-child(3) {
      text-align: left;
    }
    &:nth-child(4) {
      color: #ffdb0a;
    }
  }

  &:last-child {
    border: 5.97652px solid #67eb00;
    border-radius: 2.2412px;
    padding: 9px;
  }
`;

const StarCtn = styled.div`
  position: absolute;
  left: 15%;
`;