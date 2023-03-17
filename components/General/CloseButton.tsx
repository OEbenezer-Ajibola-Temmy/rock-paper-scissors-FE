import Image from 'next/image';
import close_icon from '../../public/svgs/ic-close.svg';
import styled from 'styled-components';

interface Props {
  setCurrentSection: (arg0: number) => void;
  setShowButton: (arg0: boolean) => void;
  setShowWaiting: (arg0: boolean) => void;
}

const CloseButton = ({ setCurrentSection, setShowButton, setShowWaiting }: Props) => {
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
