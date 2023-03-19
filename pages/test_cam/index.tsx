import { BigLeaderboard, Sidebar, TestCamComponent } from '../../components';
import styles from './page.module.scss';

const TestCam = () => {
  return (
    <>
      <BigLeaderboard />
      <div className={styles.wrapper}>
        <Sidebar />
        <TestCamComponent />
      </div>
    </>
  );
};

export default TestCam;
