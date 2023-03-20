import Image from 'next/image';
import close_icon from '../../public/svgs/ic-close.svg';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { sectionAtom } from '../../recoil/sectionAtom';
import { buttonAtom } from '../../recoil/buttonAtom';
import { waitingAtom } from '../../recoil/waitingAtom';

const CloseButton = () => {
  const [, setCurrentSection] = useRecoilState<number>(sectionAtom),
    [, setShowButton] = useRecoilState<boolean>(buttonAtom),
    [, setShowWaiting] = useRecoilState<boolean>(waitingAtom);
  return (
    <Wrapper>
      <Image
        src={close_icon}
        alt="close"
        onClick={() => {
          setCurrentSection(0);
          setShowButton(false);
          setShowWaiting(false);
        }}
      />
    </Wrapper>
  );
};

export default CloseButton;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  cursor: pointer;
  z-index: 100;
`;
