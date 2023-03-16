import Image from 'next/image';
import close_icon from '../../public/svgs/ic-close.svg';
import styled from 'styled-components';

interface Props {
  setCurrentSection: (arg0: number) => void;
}

const CloseButton = ({ setCurrentSection }: Props) => {
  return (
    <Wrapper>
      <Image
        src={close_icon}
        alt="close"
        onClick={() => {
          setCurrentSection(0);
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
