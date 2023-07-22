import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { sectionAtom } from '../../recoil';
import styles from '../../styles/Links.module.scss';
import ic_link from '../../public/svgs/link.svg';
import ic_globe from '../../public/svgs/globe.svg';
import ic_robot from '../../public/svgs/robot.svg';

const Links = () => {
  const [, setCurrentSection] = useRecoilState<number>(sectionAtom);
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => {
          setCurrentSection(2);
        }}
        className={styles.btn}
        type="button"
      >
        <Image src={ic_link} alt="link" />
        Share Play Link
      </button>
      <button
        onClick={() => {
          setCurrentSection(3);
        }}
        className={styles.btn}
        type="button"
      >
        <Image src={ic_globe} alt="globe" />
        Search Online
      </button>
      <button className={styles.btn} type="button">
        <Image src={ic_robot} alt="computer" />
        Play Computer
      </button>
    </div>
  );
};

export default Links;
