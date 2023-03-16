import Image from 'next/image';
import styles from '../../styles/TestCam.module.scss';
import Button from '../General/Button';
import ic_warning from '../../public/svgs/ic-warning.svg';

const TestCam = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Image
            src={ic_warning}
            alt="warning-svg"
          />
          <h1>Test Camera</h1>
          <p>
            Please ensure that your camera is properly set up and that you are
            in a properly lit room.
          </p>
          <Button type="button" text="Okay" />
        </div>
      </div>
    </div>
  );
};

export default TestCam;
