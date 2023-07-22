import Image from 'next/image';
import close_icon from '../../public/svgs/ic-close.svg';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { buttonAtom, leaderboardAtom, sectionAtom, waitingAtom } from '../../recoil';

type Props = {
  top?: number;
  right?: number;
};

const CloseButton = ({ top = 0, right = 0 }: Props) => {
  const [, setCurrentSection] = useRecoilState<number>(sectionAtom),
    [, setShowButton] = useRecoilState<boolean>(buttonAtom),
    [, setShowWaiting] = useRecoilState<boolean>(waitingAtom),
      [openLeaderboard, setOpenLeaderboard] =
        useRecoilState(leaderboardAtom);
  return (
    <Wrapper style={{ top: `${top}px`, right: `${right}px` }}>
      <Image
        src={close_icon}
        alt="close"
        onClick={() => {
          setCurrentSection(0);
          setShowButton(false);
          setShowWaiting(false);

          if (openLeaderboard) setOpenLeaderboard(false)
        }}
      />
    </Wrapper>
  );
};

export default CloseButton;

const Wrapper = styled.div`
  position: absolute;
  padding: 1rem;
  cursor: pointer;
  z-index: 100;
`;
