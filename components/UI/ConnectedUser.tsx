import Image from 'next/image';
import fairRock from '../../public/images/fair-rock-right.png';
import CloseButton from '../General/CloseButton';

interface Props {
  styles: any;
  setCurrentSection: (arg0: number) => void;
}

const ConnectedUser = ({ styles, setCurrentSection }: Props) => {
  return (
    <>
      <CloseButton setCurrentSection={setCurrentSection} />
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
