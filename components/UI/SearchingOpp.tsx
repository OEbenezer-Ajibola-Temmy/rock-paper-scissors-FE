import Image from 'next/image';
import loaderImg from '../../public/images/loader.png';

interface Props {
  styles: any;
}

const SearchingOpp = ({ styles }: Props) => {
  return (
    <>
      <Image
        src={loaderImg}
        alt="loader"
        className={styles.loader}
      />
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
