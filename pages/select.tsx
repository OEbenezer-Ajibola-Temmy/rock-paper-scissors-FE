import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Button,
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
import styled from 'styled-components';

const Select: NextPage = () => {
  const [changeImage, setChangeImage] = useState<number>(0),
    [changeRound, setChangeRound] = useState<number>(0),
    [currentSection, setCurrentSection] = useState<number>(0),
    [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    currentSection === 3
      ? setTimeout(() => {
          setCurrentSection(4);
          setTimeout(() => {
            setShowButton(true);
          }, 1000);
        }, 4000)
      : null;
  }, [currentSection]);
  return (
    <>
      <Sidebar />
      <div className={styles.wrapper}>
        {currentSection === 4 && showButton !== true && (
          <h1 className={styles.waiting__text}>Waiting for opponent...</h1>
        )}
        {showButton && (
          <ButtonContainer>
            <Button type="button" text="Start" />
          </ButtonContainer>
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
              <SharePlayerLink
                setCurrentSection={setCurrentSection}
                setShowButton={setShowButton}
              />
            )}
            {currentSection === 3 && (
              <SearchingOpp
                styles={styles}
                setCurrentSection={setCurrentSection}
                setShowButton={setShowButton}
              />
            )}
            {currentSection === 4 && (
              <ConnectedUser
                styles={styles}
                setCurrentSection={setCurrentSection}
                setShowButton={setShowButton}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;

const ButtonContainer = styled.div`
  width: 20%;
  margin: 1em auto -50px;
`;
