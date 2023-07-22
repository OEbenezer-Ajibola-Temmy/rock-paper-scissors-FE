import styles from '../../styles/SelectSkin.module.scss';
import ic_cheveron_left from '../../public/svgs/ic-chevron-left.svg';
import ic_cheveron_right from '../../public/svgs/ic-chevron-right.svg';
import black_rock_left from '../../public/images/black-rock-left.png';
import fair_rock_left from '../../public/images/fair-rock-left.png';
import Image from 'next/image';
import { useState } from 'react';

const SelectSkin = () => {
  const [changeImage, setChangeImage] = useState<number>(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.select__skin__color}>
          <h1>Select skin color</h1>
          <div className={styles.image__selector}>
            <Image
              src={ic_cheveron_left}
              alt="left"
              onClick={() => {
                if (changeImage === 0) {
                  setChangeImage(1);
                } else {
                  setChangeImage(changeImage - 1);
                }
              }}
              style={{
                cursor: 'pointer',
              }}
            />
            <div className={styles.images}>
              {changeImage === 0 && (
                <Image src={black_rock_left} alt="black-skin" />
              )}
              {changeImage === 1 && (
                <Image src={fair_rock_left} alt="fair-skin" />
              )}
            </div>
            <Image
              src={ic_cheveron_right}
              alt="right"
              onClick={() => {
                if (changeImage === 1) {
                  setChangeImage(0);
                } else {
                  setChangeImage(changeImage + 1);
                }
              }}
              style={{
                cursor: 'pointer',
              }}
            />
          </div>
          <h2>@JAMANSON</h2>
        </div>
      </div>
    </div>
  );
};

export default SelectSkin;
