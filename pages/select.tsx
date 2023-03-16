import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ConnectedUser,
  Links,
  SearchingOpp,
  SelectRound,
  SharePlayerLink,
  Sidebar,
} from '../components';
import styles from '../styles/Select.module.scss';
import { handData } from '../utils/handData';
import chevron_left from '../public/svgs/ic-chevron-left.svg';
import chevron_right from '../public/svgs/ic-chevron-right.svg';

const Select: NextPage = () => {
  const [changeImage, setChangeImage] = useState<number>(0),
    [changeRound, setChangeRound] = useState<number>(0),
    [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    currentSection === 3
      ? setTimeout(() => {
          setCurrentSection(4);
        }, 4000)
      : null;
  }, [currentSection]);
  return (
    <>
      <Sidebar />
      <div className={styles.wrapper}>
        {currentSection === 4 && (
          <h1 className={styles.waiting__text}>Waiting for opponent...</h1>
        )}
        <div className={styles.inner}>
          <div className={styles.select__skin__color}>
            <h1>Select skin color</h1>
            <div className={styles.image__selector}>
              <Image
                src={chevron_left}
                alt="chevron_left"
                onClick={() => {
                  changeImage === 0
                    ? setChangeImage(1)
                    : setChangeImage(changeImage - 1);
                }}
              />
              <div className={styles.images}>
                <Image src={handData[changeImage].src} alt="hand" />
              </div>
              <Image
                src={chevron_right}
                alt="chevron_right"
                onClick={() => {
                  changeImage === 1
                    ? setChangeImage(0)
                    : setChangeImage(changeImage + 1);
                }}
              />
            </div>
            <h2>@JAMANSON</h2>
          </div>
          <div className={styles.select__rounds}>
            {currentSection === 0 && (
              <SelectRound
                styles={styles}
                changeRound={changeRound}
                setChangeRound={setChangeRound}
                setCurrentSection={setCurrentSection}
              />
            )}
            {currentSection === 1 && (
              <Links setCurrentSection={setCurrentSection} />
            )}
            {currentSection === 2 && (
              <SharePlayerLink setCurrentSection={setCurrentSection} />
            )}
            {currentSection === 3 && <SearchingOpp styles={styles} />}
            {currentSection === 4 && (
              <ConnectedUser
                styles={styles}
                setCurrentSection={setCurrentSection}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
