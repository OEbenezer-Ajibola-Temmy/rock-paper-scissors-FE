import Image from 'next/image';
import { handData } from '../../../utils/handData';
import styles from '../../../styles/User.module.scss';
type Props = {
  hand_num: number;
};

const User = ({ hand_num }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.select__skin__color}>
          <div className={styles.image__selector}>
            <div className={styles.images}>
              <Image src={handData[hand_num].src} alt="hand" />
            </div>
          </div>
          <h2>@JAMANSON</h2>
        </div>
      </div>
    </div>
  );
};

export default User;
