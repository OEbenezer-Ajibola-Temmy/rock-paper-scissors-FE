import styled from 'styled-components';
import trophy from '../../../public/images/trophy.png';
import Image from 'next/image';
import CloseButton from '../../General/CloseButton';
import Button from '../../General/Button';

const Status = () => {
  return (
    <Wrapper>
      <Inner>
        <Card>
          <CloseButton />
          <TrophyCtn>
            <Image src={trophy} alt="trophy" />
          </TrophyCtn>
          <h1>Jamanson Wins</h1>
          <ButtonCtn>
            <Button text="Play Again" type="button" />
            <Button text="See Leaderboard" type="button" />
          </ButtonCtn>
        </Card>
      </Inner>
    </Wrapper>
  );
};

export default Status;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.44);
  backdrop-filter: blur(3.5px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div``;

const Card = styled.div`
  position: relative;
  width: 28.625rem;
  height: 26.1875rem;
  border-radius: 1.875rem;
  border: 6px solid #67eb00;
  background: #1c1c1c;
  box-shadow: 0.88px 6.58px 16px 2px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  h1 {
    color: #fff;
    text-align: center;
    font-family: Digitalt, sans-serif;
    font-size: 2.1rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.08281rem;
    text-transform: uppercase;
  }
`;

const TrophyCtn = styled.div`
  margin-top: -120px;
  img {
    object-fit: cover;
    margin-bottom: 100px;
  }
`;

const ButtonCtn = styled.div`
    width: 90%;
    margin: auto;
`