import Image from 'next/image';
import loaderImg from '../../public/images/loader.png';
import CloseButton from '../General/CloseButton';

interface Props {
  styles: any;
  setCurrentSection: (arg0: number) => void;
  setShowButton: (arg0: boolean) => void;
}

const SearchingOpp = ({ styles, setCurrentSection, setShowButton }: Props) => {
  return (
    <>
      <CloseButton
        setCurrentSection={setCurrentSection}
        setShowButton={setShowButton}
      />
      <Image src={loaderImg} alt="loader" className={styles.loader} />
      <h2
        style={{
          marginTop: '1rem',
        }}
        className={styles.copy__link}
      >
        Searching for opponent
      </h2>
    </>
  );
};

export default SearchingOpp;
