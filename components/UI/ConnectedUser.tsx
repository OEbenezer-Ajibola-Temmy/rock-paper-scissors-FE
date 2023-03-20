import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import fairRock from '../../public/images/fair-rock-right.png';
import { buttonAtom, startAtom } from '../../recoil';
import CloseButton from '../General/CloseButton';

interface Props {
  styles: any;
}

const ConnectedUser = ({ styles }: Props) => {
  const start = useRecoilValue(startAtom);
  const showButton = useRecoilValue(buttonAtom);
  return (
    <>
      {showButton && <CloseButton />}
      <div>
        <Image src={fairRock} alt="fair-skin" />
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
