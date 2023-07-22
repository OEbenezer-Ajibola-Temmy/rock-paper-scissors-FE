import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { sectionAtom } from '../../recoil';
import ic_chevron_white_left from '../../public/svgs/ic-chevron-white-left.svg';
import ic_chevron_white_right from '../../public/svgs/ic-chevron-white-right.svg';

type Props = {
  styles: any;
  changeRound: number;
  setChangeRound: (arg0: number) => void;
};

const SelectRound = ({
  styles,
  changeRound,
  setChangeRound,
}: Props): JSX.Element => {
  const [_, setCurrentSection] = useRecoilState<number>(sectionAtom);
  const rounds_num = [3, 5, 7, 9, 11];
  return (
    <>
      <h1>Select number of rounds</h1>
      <div className={styles.rounds__selector}>
        <Image
          src={ic_chevron_white_left}
          alt="left"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (changeRound === 0) {
              setChangeRound(4);
            } else {
              setChangeRound(changeRound - 1);
            }
          }}
        />
        <div className={styles.rounds__slider}>
          <div className={styles.rounds__slider__inner}>
            <div className={styles.rounds__slider__inner__round}>
              {rounds_num[changeRound]}
            </div>
          </div>
        </div>
        <Image
          src={ic_chevron_white_right}
          alt="right"
          onClick={() => {
            if (changeRound === 4) {
              setChangeRound(0);
            } else {
              setChangeRound(changeRound + 1);
            }
          }}
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
      <button
        className={styles.select__btn}
        onClick={() => setCurrentSection(1)}
        type="button"
      >
        Next
      </button>
    </>
  );
};

export default SelectRound;
