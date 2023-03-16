import Image from 'next/image';
import fairRock from '../../public/images/fair-rock-right.png';
import CloseButton from '../General/CloseButton';

interface Props {
  styles: any;
  setCurrentSection: (arg0: number) => void;
  setShowButton: (arg0: boolean) => void;
}

const ConnectedUser = ({ styles, setCurrentSection, setShowButton }: Props) => {
  return (
    <>
      <CloseButton
        setCurrentSection={setCurrentSection}
        setShowButton={setShowButton}
      />
      <div>
        <Image src={fairRock} alt="black-skin" />
        <h2
          style={{
            position: 'absolute',
            left: '0',
            right: '0',
            textAlign: 'center',
            marginTop: '15vh',
          }}
          className={styles.copy__link}
        >
          Ajibola
        </h2>
      </div>
    </>
  );
};

export default ConnectedUser;
